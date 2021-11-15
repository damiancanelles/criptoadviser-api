const express = require("express");
const router = express.Router();
const {protect} = require("../midlewares/auth")
const Cursos = require("../models/model_cursos")
const mongoose = require("mongoose");
const ClasesI = require("../models/model_clasesI")



router.get("/", async (req,res) => {
    const noticias = await Cursos.find().populate('clases');
    res.json(noticias);
});

router.get("/:id", async (req,res) => {
    const noticia = await Cursos.findById(req.params.id).populate('clases');
    res.json(noticia);
});

router.get("/clases/:id", async (req,res) => {
    const noticia = await Cursos.findById(req.params.id).populate('clases');
    res.json(noticia);
});

router.post("/", async (req,res) => {
    const {name, descripcion, price, image} = req.body;
    const noticia = new Cursos({name, descripcion, price, image});
    await noticia.save();
    res.json({
        message: "null"
    });
});

router.put("/:id", async (req,res) => {
    const {name, descripcion, price, image} = req.body;
    const newnoticia = {name, descripcion, price, image};
    await Cursos.findByIdAndUpdate(req.params.id,newnoticia);
    res.json({
        message: "null"
    });
})

router.delete("/:id", async (req,res) => {
    await Cursos.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;