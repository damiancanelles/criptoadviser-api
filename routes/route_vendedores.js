const express = require("express");
const router = express.Router();
const Vendedores = require("../models/model_botvendedores")


router.get("/", async (req,res) => {
    const clases = await Vendedores.find();
    
    res.json(clases);
});

router.get("/:id", async (req,res) => {
    const clases = await Vendedores.findOne({username: req.params.id});
    res.json(clases);
});

router.get("/userid/:id", async (req,res) => {
    const clases = await Vendedores.findOne({userid: req.params.id});
    res.json(clases);
});

router.get("/referencebyid/:id", async (req,res) => {
    const clases = await Vendedores.findOne({username: req.params.id});
    if (clases == null) {
        res.json(clases);
    }
    else {
        res.json(clases.usersreference);
    }
});

router.get("/reference/:id", async (req,res) => {
    const clases = await Vendedores.findOne({username: req.params.id});
    if (clases == null) {
        res.json(clases);
    }
    else {
        res.json(clases.usersreference);
    }
    
});

router.post("/", async (req,res) => {
    
    const {username,userid} = req.body;
    const clase = new Vendedores({username,userid});
    check = await Vendedores.findOne({userid});
    if (check) {
        res.json({
            mesage: "Ya usted esta registrado como vendedor",
            update: "no"
        });
    }
    else {
        await clase.save();
        res.json({
            mesage: "Usted se ha registrado correctamente",
            update: "si"
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
            mesage: "Usted ya le ha dado su like a este vendedor",
            update: "no"
        }); 
    }
    else {
        wallet.likes = wallet.likes + 1;
        wallet.users.push(username);
        await Vendedores.findByIdAndUpdate(wallet._id,wallet);
        res.json({
            mesage: "ok",
            update: "si"
        });
    }
    
});

router.post("/dislike/:id", async (req,res) => {
    
    const {username} = req.body;
    const wallet = await Vendedores.findOne({username: req.params.id});
    const check = wallet.usersdislikes.find(element => element === username);
    if (check) {
        res.json({
            mesage: "Usted ya le ha dado su dislike a este vendedor",
            update: "no"
        }); 
    }
    else {
        wallet.dislikes = wallet.dislikes + 1;
        wallet.usersdislikes.push(username);
        await Vendedores.findByIdAndUpdate(wallet._id,wallet);
        res.json({
            mesage: "ok",
            update: "si"
        });
    }
    
});

router.post("/reference/:id", async (req,res) => {
    
    const {username} = req.body;
    const wallet = await Vendedores.findOne({username: req.params.id});
    const check = wallet.usersreference.find(element => element === username);
    if (check) {
        res.json({
            mesage: "Usted ya le ha dado su referencia a este vendedor",
            update: "no"
        }); 
    }
    else {
        wallet.reference = wallet.reference + 1;
        wallet.usersreference.push(username);
        await Vendedores.findByIdAndUpdate(wallet._id,wallet);
        res.json({
            mesage: "ok",
            update: "si"
        });
    }
    
});

router.delete("/:id", async (req,res) => {
    const wallet = await Vendedores.findOne({username: req.params.id}) 
    await Vendedores.findByIdAndDelete(wallet._id);
    res.json("delete");
})

module.exports = router;