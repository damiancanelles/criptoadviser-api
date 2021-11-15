const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {protect} = require("../midlewares/auth")
const ClasesI = require("../models/model_clasesI")
const Cursos = require("../models/model_cursos")

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
    const clases = await ClasesI.find();
    console.log(clases);
    res.json(clases);
});

router.get("/:id", async (req,res) => {
    const clases = await ClasesI.findById(req.params.id);
    res.json(clases);
});

router.post("/", async (req,res) => {
    console.log(req.body.cursoid);
    const {titulo, descripcion, link, datestart, duracion, file, cursoid} = req.body;
    const clase = new ClasesI({titulo, descripcion, link, datestart, duracion, file});
    await clase.save();
    const curso = await Cursos.findById(req.body.cursoid)
    curso.clases.push(clase._id)
    await Cursos.findByIdAndUpdate(curso._id,curso)
    res.json({
        message: "null",
    });
});

router.put("/:id", async (req,res) => {
    console.log(req.params.id);
    const {titulo, descripcion, link, datestart, duracion, file} = req.body;
    const newclase = {titulo, descripcion, link, datestart, duracion, file};
    await ClasesI.findByIdAndUpdate(req.params.id,newclase);
    res.json({
        message: "null"
    });
})

router.delete("/:id", async (req,res) => {
    await ClasesI.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;