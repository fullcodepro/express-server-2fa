const { mongoose } = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/multifactordb');
        console.log('DB Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB;