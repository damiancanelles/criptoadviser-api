const express = require("express");
const router = express.Router();
const path = require("path");
const {protect} = require("../midlewares/auth")
const TransaccionsMC = require("../models/model_transaccionesmc")

router.get("/", async (req,res) => {
    const clases = await TransaccionsMC.find();
    res.json(clases);
});

router.get("/:id", async (req,res) => {x
    const clases = await TransaccionsMC.findById(req.params.id);
    res.json(clases);
});

router.post("/", async (req,res) => {
    const {username, image, monto, subscription, moneda} = req.body;
    const clase = new TransaccionsMC({username, image, monto, subscription, moneda});
    await clase.save();
    res.json({
        mesage: null
    });
});

router.put("/:id", async (req,res) => {
    const {username, image, monto, subscription, moneda} = req.body;
    const newclase = {username, image, monto, subscription, moneda};
    await TransaccionsMC.findByIdAndUpdate(req.params.id,newclase);
    res.json("update");
})

router.get("/confirm/:id", async (req,res) => {
   
    const usuario = await TransaccionsMC.findById(req.params.id);
    usuario.confirmation = true;
    await TransaccionsMC.findByIdAndUpdate(req.params.id,usuario);
    res.json({
        mesage: null,
    })
});

router.delete("/:id", async (req,res) => {
    await TransaccionsMC.findByIdAndDelete(req.params.id);
    res.json("delete");
})

module.exports = router;