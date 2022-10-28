const express = require("express")
const router = express.Router()

//importar modelo
const User = require("../models/user.model.js")

//router.get("ruta", () => {})
/* router.get("/get-products", (req, res) => {
    res.status(201).json({data: []})
})
 */
//crear producto
router.post("/create-user", async (req, res) => {

    const newUser = new User(req.body)
    await newUser.save()

    res.status(200).json({msg: "usuario guardado exitosamente"})
})

//eliminar producto
router.delete("/delete-user", async (req, res) => {
    await User.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "usuario eliminado", id: req.query.id})
})

// actualizar producto
router.put("/update-user", async (req, res) => {
    await User.findByIdAndUpdate(req.query.id, {$set: req.body})
    res.status(200).json({msg: "usuario actualizado"})
})


//listar productos
router.get("/get-user", async (req, res) => {
    const User = await User.find()
    return res.status(200).json({data: User})
})

//exportar las rutas
module.exports = router 