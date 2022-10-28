const express = require("express")
const cors = require("cors")

const app = express()
const port = 5000

//middelwares
require("./user.data")
app.use(cors())
app.use(express.json())

//rutas
app.get("/api", (req, res) => {
    res.status(200).json({msg: "Bit-user API v1.0.0"})
})
//app.use(/activadorDeRutas, importacion de las rutas que se pueden usar con esta ruta)
app.use("/user", require("./routes/user"))


app.listen(port, () => {console.log("Api corriendo en el pueto", port)})