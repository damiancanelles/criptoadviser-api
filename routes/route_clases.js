const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {protect} = require("../midlewares/auth")
const Clases = require("../models/model_clases")

const storage = multer.diskStorage({
    destination: "./frontend/build/media",
    filename: (req, file, cb ) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

router.post("/file",upload.single("file"), (req,res) => {
    
    res.json({
        status: "upload complete",
        path: `https://criptoadviser.com/media/${req.file.filename}`
    })
})

router.get("/", async (req,res) => {
    const clases = await Clases.find();
    console.log(clases);
    res.json(clases);
});

router.get("/:id", async (req,res) => {
    const clases = await Clases.findById(req.params.id);
    res.json(clases);
});

router.post("/", async (req,res) => {
    console.log(req.body);
    const {titulo, descripcion, link, date, datestart, duracion, file} = req.body;
    const clase = new Clases({titulo, descripcion, link, date, datestart, duracion, file});
    await clase.save();
    res.json({
        message: "null",
    });
});

router.put("/:id", async (req,res) => {
    console.log(req.params.id);
    const {titulo, descripcion, link, date, datestart, duration, file} = req.body;
    const newclase = {titulo, descripcion, link, date, datestart, duration, file};
    await Clases.findByIdAndUpdate(req.params.id,newclase);
    res.json({
        message: "null"
    });
})

router.delete("/:id", async (req,res) => {
    await Clases.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;