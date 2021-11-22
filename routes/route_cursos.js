const express = require("express");
const router = express.Router();
const {protect} = require("../midlewares/auth")
const Cursos = require("../models/model_cursos")
const UC = require("../models/model_user_clases")
const User = require("../models/model_users");


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
    res.json(noticia.clases);
});

router.post("/", async (req,res) => {
    const {name, descripcion, price, image} = req.body;
    const noticia = new Cursos({name, descripcion, price, image});
    await noticia.save();
    res.json({
        message: "null"
    });
});

router.post("/adduser/", async (req,res) => {
    const {userid, cursoid} = req.body;
    console.log(userid)
    const usuario = await User.findById(userid)
    const curso = await Cursos.findById(cursoid)
    const noticia = new UC({user: usuario._id, curso: curso._id});
    await noticia.save();
    res.json({
        message: "null"
    });
});

router.post("/adduserN/", async (req,res) => {
    const {user, cursoid} = req.body;
    const usuario = await User.findOne(user)
    const curso = await Cursos.findById(cursoid)
    const noticia = new UC({user: usuario._id, curso: curso._id});
    await noticia.save();
    res.json({
        message: "null"
    });
});

router.get("/users/:id", async (req,res) => {
    const noticia = await UC.find({curso: req.params.id}).populate('user');
    res.json(noticia);
});

router.get("/cursos/:id", async (req,res) => {
    const noticia = await UC.find({user: req.params.id}).populate('curso');
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