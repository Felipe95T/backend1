//importar mongoose
const mongoose = require("mongoose")

//llamar a la clase Schema => es la coleccion
const {Schema} = mongoose
//crear Schema de lo que necesito
const userSchema = new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        isAdmin: {type: String, require: true || false}
    },
    {
        versionKey: false,
        timestamps: true
    }
)
//exportar como un modelo

module.exports = mongoose.model("user", userSchema)