const express = require("express");
const router = express.Router();
const path = require("path");
const {protect} = require("../midlewares/auth")
const Telegram = require("../models/model_telegramusers")
const axios = require("axios")
const url = 'https://api.telegram.org/bot';
const token = "1855628452:AAGLQxVZTAdL1tdmQrlchdigQIA6hNn6Hk4"

router.get("/", async (req,res) => {
    const clases = await Telegram.find();
    res.json(clases);
});

router.get("/user/:username", async (req,res) => {
    const clase = await Telegram.findOne({telegramuser: req.params.username});
    if (clase) {
        res.json({
            chatid: clase.chatid
        });
    }
    else {
        res.json({
            message: "error"
        });
    }
});

router.post("/notificaciones/", async (req,res) => {
    const {telegramuser, content} = req.body;
    if (telegramuser.includes('@')) {
        const ntelegramuser = telegramuser.split('@')[1]
        const usuario = await Telegram.findOne({telegramuser: ntelegramuser})
        if (usuario) {
            axios.post(`${url}${token}/sendMessage`,{chat_id: usuario.chatid, text: content})
            .then(() => {
                res.json({
                    message: "send"
                });
            })
        }
        else {
            res.json({
                message: "error"
            });
        }
    }
    const usuario = await Telegram.findOne(telegramuser)
    if (usuario) {
        axios.post(`${url}${token}/sendMessage`,{chat_id: usuario.chatid, text: content})
        .then(() => {
            res.json({
                message: "send"
            });
        })
    }
    else {
        res.json({
            message: "error"
        });
    }

});

router.post("/admin/", async (req,res) => {
    const {content} = req.body;
    
    
    axios.post(`${url}${token}/sendMessage`,{chat_id: 950513110, text: content})
    .then(() => {
        res.json({
            message: "send"
        });
    })
    

});

router.post("/", async (req,res) => {
    console.log(req.body)
    if(req.body.message) {
        const telegramuser = req.body.message.chat.username;
    const chatid = req.body.message.chat.id;
    const text = req.body.message.text;
    if (text === "/start" || text === "/iniciar") {
        const usuario = new Telegram({telegramuser, chatid});
        const check = await Telegram.findOne({telegramuser});
        if (check) {
            axios.post(`${url}${token}/sendMessage`,{
                chat_id: chatid,
                text: 'Ya estas registrado'
           })
        }
        else {
            axios.post(`${url}${token}/sendMessage`,{
                chat_id: chatid,
                text: 'Registro completado ya puedes recibir notificaciones'
           })
            await usuario.save();
        }
    }
    else {
        axios.post(`${url}${token}/sendMessage`,{
            chat_id: chatid,
            text: 'No me cabres chaval deja de escribirme'
       })
    }
    }
    
    res.status(200).send({});

});

module.exports = router;