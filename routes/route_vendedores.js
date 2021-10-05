const express = require("express");
const router = express.Router();
const Vendedores = require("../models/model_botvendedores")


router.get("/", async (req,res) => {
    const clases = await Vendedores.find();
    
    res.json(clases);
});

router.get("/:id", async (req,res) => {
    const clases = await Vendedores.findOne({ussername: req.params.id});
    res.json(clases);
});

router.post("/", async (req,res) => {
    
    const {username} = req.body;
    const clase = new Vendedores({username});
    check = await Vendedores.findOne({username});
    if (check) {
        res.json({
            mesage: "Ya usted esta registrado como vendedor"
        });
    }
    else {
        await clase.save();
        res.json({
            mesage: "Usted se ha registrado correctamente"
        });
    }
});

router.post("/aprobar/:id", async (req,res) => {
    
    const wallet = await Vendedores.findOne({username: req.params.id});
    wallet.respeto = true;
    await Vendedores.findByIdAndUpdate(wallet._id,wallet);
    res.json({
        mesage: null
    });
});

router.post("/like/:id", async (req,res) => {
    
    const {username} = req.body;
    const wallet = await Vendedores.findOne({username: req.params.id});
    const check = wallet.users.find(element => element === username);
    if (check) {
        res.json({
            mesage: "Usted ya le ha dado su like a este vendedor"
        }); 
    }
    else {
        wallet.likes = wallet.likes + 1;
        wallet.users.push(username);
        await Vendedores.findByIdAndUpdate(wallet._id,wallet);
        res.json({
            mesage: "ok"
        });
    }
    
});



router.delete("/:id", async (req,res) => {
    const wallet = await Vendedores.findOne({username: req.params.id}) 
    await Vendedores.findByIdAndDelete(wallet._id);
    res.json("delete");
})

module.exports = router;