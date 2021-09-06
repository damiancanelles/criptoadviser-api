const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {protect} = require("../midlewares/auth")
const Tarjetas = require("../models/model_tarjetas")


router.get("/", async (req,res) => {
    const clases = await Tarjetas.find();
    
    res.json(clases);
});

router.get("/:id", async (req,res) => {
    const clases = await Tarjetas.findById(req.params.id);
    res.json(clases);
});

router.post("/", async (req,res) => {
    
    const {name, moneda, numero} = req.body;
    const clase = new Tarjetas({name, moneda, numero});
    await clase.save();
    res.json({
        mesage: null
    });
});

router.put("/:id", async (req,res) => {
 
    const {name, moneda, numero} = req.body;
    const newclase = {name, moneda, numero};
    await Tarjetas.findByIdAndUpdate(req.params.id,newclase);
    res.json("update");
})

router.delete("/:id", async (req,res) => {
    await Tarjetas.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;