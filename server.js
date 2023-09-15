const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.route");
const morgan = require("morgan");
const conectarDB = require("./mongodb/conn");

const app = express();

async function main() {
  
  // DB Connection
  conectarDB();
 
  // Middleware
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
  app.use(express.json());

  //   Health Checker
  app.get("/api/healthchecker", (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to Two-Factor Authentication with Node.js",
    });
  });

  app.use("/api/auth", authRouter);

  app.all("*", (req, res) => {
    return res.status(404).json({
      status: "fail",
      message: `Route: ${req.originalUrl} not found`,
    });
  });

  const PORT = 8000;
  app.listen(PORT, () => {
    console.info(`Server started on http://localhost:${PORT}`);
  });
}

main()
  .then(() => console.log("Application started successfully"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
