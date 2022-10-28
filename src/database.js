const mongoose = require("mongoose")

const dbName = "bit-shop"
const uri = `mongodb+srv://FelipeCT95:pipe9502@cluster0.sksuthp.mongodb.net/${dbName}?retryWrites=true&w=majority`
mongoose.connect(uri)
    .then((db) => console.log("conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose