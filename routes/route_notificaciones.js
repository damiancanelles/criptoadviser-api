const express = require("express");
const router = express.Router();
const {protect} = require("../midlewares/auth")
const Notificaciones = require("../models/model_notificaciones")



router.get("/", async (req,res) => {
    const noticias = await Notificaciones.find();
    res.json(noticias);
});

router.get("/:id", async (req,res) => {
    const noticia = await Notificaciones.find({userid: req.params.id});
    res.json(noticia);
});

router.post("/", async (req,res) => {
    const {preview, userid, content} = req.body;
    const noticia = new Notificaciones({preview, userid, content});
    await noticia.save();
    res.json({
        message: "null"
    });
});

router.put("/:id", async (req,res) => {
    const {userid, content} = req.body;
    const newnoticia = {preview, userid, content};
    await Notificaciones.findByIdAndUpdate(req.params.id,newnoticia);
    res.json({
        message: "null"
    });
})

router.delete("/:id", async (req,res) => {
    await Notificaciones.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;