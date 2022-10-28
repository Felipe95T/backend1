const express = require("express")
const router = express.Router()

//importar modelo
const Product = require("../models/product.model")

//router.get("ruta", () => {})
/* router.get("/get-products", (req, res) => {
    res.status(201).json({data: []})
})
 */
//crear producto
router.post("/create-product", async (req, res) => {

    const newProduct = new Product(req.body)
    await newProduct.save()

    res.status(200).json({msg: "Producto guardado exitosamente"})
})

//eliminar producto
router.delete("/delete-product", async (req, res) => {
    await Product.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "producto eliminado", id: req.query.id})
})

// actualizar producto
router.put("/update-product", async (req, res) => {
    await Product.findByIdAndUpdate(req.query.id, {$set: req.body})
    res.status(200).json({msg: "producto actualizado"})
})


//listar productos
router.get("/get-products", async (req, res) => {
    const Products = await Product.find()
    return res.status(200).json({data: Products})
})

//exportar las rutas
module.exports = router