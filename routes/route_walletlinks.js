const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {protect} = require("../midlewares/auth")
const Wallets = require("../models/model_walletlinks")

const storage = multer.diskStorage({
    destination: "./public/img",
    filename: (req, file, cb ) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

router.post("/img",protect,upload.single("img"), (req,res) => {
    
    res.json({
        status: "upload complete",
        path: `http://localhost:3002/clasesfiles/${req.file.filename}`
    })
})

router.get("/", async (req,res) => {
    const clases = await Wallets.find();
    
    res.json(clases);
});

router.get("/:id", async (req,res) => {
    const clases = await Wallets.findById(req.params.id);
    res.json(clases);
});

router.post("/", async (req,res) => {
    
    const {name, link, image} = req.body;
    const clase = new Wallets({name, link, image});
    await clase.save();
    res.json({
        mesage: null
    });
});

router.put("/:id", async (req,res) => {
 
    const {name, link, image} = req.body;
    const newclase = {name, link, image};
    await Wallets.findByIdAndUpdate(req.params.id,newclase);
    res.json("update");
})

router.delete("/:id", async (req,res) => {
    await Wallets.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;