//importar mongoose
const mongoose = require("mongoose")

//llamar a la clase Schema => es la coleccion
const {Schema} = mongoose
//crear Schema de lo que necesito
const productSchema = new Schema(
    {
        name: {type: String, required: true},
        price: {type: String, required: true},
        description: {type: String, default: "El vendedor no ha añadido una descripcion"},
        image: {type: String, default: "Sin imagen"},
        stock: {type: Number, default: 0},
        keyWords: {type: Array, default: []}
    },
    {
        versionKey: false,
        timestamps: true
    }
)
//exportar como un modelo

module.exports = mongoose.model("product", productSchema)
