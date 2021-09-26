const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {protect} = require("../midlewares/auth")
const Servicios = require("../models/model_servicios")

const storage = multer.diskStorage({
    destination: "./public/media",
    filename: (req, file, cb ) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

router.post("/manyfile",upload.array("file"), async (req,res) => {
    const rutes = []
    await req.files.map((file) => {
        rutes.push(`https://criptoadviser.com/media/${file.filename}`)
    })
    res.json({
        status: "upload complete",
        rutes: rutes
    })
})

router.post("/file",upload.single("file"), (req,res) => {
    
    res.json({
        status: "upload complete",
        path: `https://criptoadviser.com/media/${req.file.filename}`
    })
})

router.get("/", async (req,res) => {
    const noticias = await Servicios.find();
    console.log(noticias);
    res.json(noticias);
});

router.get("/:id", async (req,res) => {
    const noticia = await Servicios.findById(req.params.id);
    res.json(noticia);
});

router.post("/", async (req,res) => {
    console.log(req.body);
    const {titulo, descripcion, image, date,contactinfo, gallery, type} = req.body;
    const noticia = new Servicios({titulo, descripcion, image, date,contactinfo, gallery, type});
    await noticia.save();
    res.json({
        message: "null"
    });
});

router.put("/:id", async (req,res) => {
    console.log(req.params.id);
    const {titulo, descripcion, image, date,contactinfo, gallery, type} = req.body;
    const newnoticia = {titulo, descripcion, image, date,contactinfo, gallery, type};
    await Servicios.findByIdAndUpdate(req.params.id,newnoticia);
    res.json({
        message: "null"
    });
})

router.delete("/:id", async (req,res) => {
    await Servicios.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;