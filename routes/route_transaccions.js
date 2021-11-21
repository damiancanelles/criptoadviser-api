const express = require("express");
const router = express.Router();
const path = require("path");
const {protect} = require("../midlewares/auth")
const Transaccions = require("../models/model_transaccions")

router.get("/", async (req,res) => {
    const clases = await Transaccions.find();
    res.json(clases);
});

router.get("/:id", async (req,res) => {
    const clases = await Transaccions.findById(req.params.id);
    res.json(clases);
});

router.post("/", async (req,res) => {
    const {username, hash, monto, subscription, idwallet, ref} = req.body;
    const clase = new Transaccions({username, hash, monto, subscription, idwallet, ref});
    await clase.save();
    res.json({
        mesage: null
    });
});

router.put("/:id", async (req,res) => {
    const {username, hash, monto, subscription, idwallet, ref} = req.body;
    const newclase = {username, hash, monto, subscription, idwallet, ref};
    await Transaccions.findByIdAndUpdate(req.params.id,newclase);
    res.json("update");
})

router.get("/confirm/:id", async (req,res) => {
   
    const usuario = await Transaccions.findById(req.params.id);
    usuario.confirmation = true;
    await Transaccions.findByIdAndUpdate(req.params.id,usuario);
    res.json({
        mesage: null,
    })
});

router.delete("/:id", async (req,res) => {
    await Transaccions.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;