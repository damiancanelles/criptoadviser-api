const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {protect} = require("../midlewares/auth")
const Freelancers = require("../models/model_freelancers")

const storage = multer.diskStorage({
    destination: "./public/media",
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

router.get("/", async (req,res) => {
    const clases = await Freelancers.find();
    console.log(clases);
    res.json(clases);
});

router.get("/:id", async (req,res) => {
    const clases = await Freelancers.findById(req.params.id);
    res.json(clases);
});

router.post("/", async (req,res) => {
    console.log(req.body);
    const {titulo, descripcion, image, date,contactinfo, gallery} = req.body;
    const clase = new Freelancers({titulo, descripcion, image, date,contactinfo, gallery});
    await clase.save();
    res.json({
        message: "null"
    });
});

router.put("/:id", async (req,res) => {
    console.log(req.params.id);
    const {titulo, descripcion, image, date,contactinfo, gallery} = req.body;
    const newclase = {titulo, descripcion, image, date,contactinfo, gallery};
    await Freelancers.findByIdAndUpdate(req.params.id,newclase);
    res.json({
        message: "null"
    });
})

router.delete("/:id", async (req,res) => {
    await Freelancers.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;