const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {protect} = require("../midlewares/auth")
const Products = require("../models/model_products")

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
    const clases = await Products.find();
    res.json(clases);
});

router.get("/:id", async (req,res) => {
    const clases = await Products.findById(req.params.id);
    res.json(clases);
});

router.post("/", async (req,res) => {
    const { name, descripcion, price, date, image, link} = req.body;
    const clase = new Products({ name, descripcion, price, date, image, link});
    await clase.save();
    res.json({
        message: "null"
    });
});

router.put("/:id", async (req,res) => {
    const { name, descripcion, price, date, image, link} = req.body;
    const newclase = { name, descripcion, price, date, image, link};
    await Products.findByIdAndUpdate(req.params.id,newclase);
    res.json({
        message: "null"
    });
})

router.delete("/:id", async (req,res) => {
    await Products.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;