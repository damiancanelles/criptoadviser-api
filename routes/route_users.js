const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const {protect} = require("../midlewares/auth")
const User = require("../models/model_users");
const { nextTick } = require("process");
const nodemailer = require('nodemailer');
const {addUserValidation} = require("../midlewares/validations/users/user.validation");
const Telegram = require("../models/model_telegramusers")
const axios = require("axios")
const url = 'https://api.telegram.org/bot';
const token = "1855628452:AAHzvZoA1fVp-Pex7vIPOxr9dma_zFdv7oA"
// Correo

const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'criptoadviser@yahoo.com',
      pass: 'tfykuaibtlzrryyx' // naturally, replace both with your real credentials or an application-specific password
    }
  });
  
  

// Correo




router.post("/login", async (req,res) => {
   
    const {user, password} = req.body;
    if(!user || !password) {
        res.json({
            message: "Por favor introdusca sus credenciales."
        })
    }
    const usuario = await User.findOne({user}).select('+password');
    if(!usuario) {
        res.json({
            message: "Sus credendiales son incorrectas."
        })
    }
    const match = await bcrypt.compare(password,usuario.password);
    if(!match) {
        res.json({
            message: "Su contraseña es incorrecta."
        })
    }
    if(usuario.activate == false) {
        res.json({
            message: "Por favor confirme su correo electronico."
        })
    }


    const token = jwt.sign({ id:user._id}, "secret", {expiresIn: "24h"})
    
    const options = {
        expires: new Date(
            Date.now + "24h" * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    res
    .cookie('token',token,options)
    .json({
        
        message: "null",
        userinfo: {
        token,
        id: usuario._id,
        name: usuario.user,
        subscription: usuario.subscription,
        role: usuario.role,
        telegramuser: usuario.telegramuser,
        }

    })
});
     

router.get("/", async (req,res) => {
    const user = await User.find();
    
    res.json(user);
});

router.get("/:id", async (req,res) => {
    const usuario = await User.findById(req.params.id);
    res.json(
        {
            message: null,
            user: usuario
        }
    );
});

router.get("/register/:id", async (req,res) => {
    
    const usuario = await User.findById(req.params.id);
    usuario.activate = true;
    await User.findByIdAndUpdate(req.params.id,usuario);
    res.redirect("https://damiancanelles.github.io/CriptoADVISER/#/login");
});

router.post("/", async (req,res) => {
    
    const {user, password, email, telegramuser} = req.body;
    const usuario = new User({user, password, email, telegramuser});
    const check = await User.findOne({user});
    if(check) {
        res.json({
            message: "Ya existe un usuario con ese nombre."
        })
    }
    else {
        const check2 = await User.findOne({email});
        if(check2) {
            res.json({
                message: "Ya existe una cuenta registrada con esa direccion de correo."
            })
        }
        else {
            const check3 = await User.findOne({telegramuser})
            if (check3) {
                res.json({
                    message: "Ya existe una cuenta registrada con este usuario de telegram."
                })
            }
            else {
                const telegram = await Telegram.findOne({telegramuser})
                if (telegram) {
                    axios.post(`${url}${token}/sendMessage`,{
                        chat_id: telegram.chatid,
                        text: `Usted acaba de registrarse en CriptoADVISER por favor ingrese a al siguiente link para confirmar su cuenta https://criptoadviser-rest-api.herokuapp.com/api/users/register/${usuario._id}.`
                    })
                }
                
                const mailOptions = {
                    from: 'criptoadviser@yahoo.com',
                    to: usuario.email,
                    subject: 'Confirm Account',
                    html: ` <div>
                    <h1>Por favor ingrese al siguiente link si usted no se a registrado en CriptoAVISER simplemente ignore este correo.</h1>
                    <a href="https://criptoadviser-rest-api.herokuapp.com/api/users/register/${usuario._id}">https://criptoadviser-rest-api.herokuapp.com/api/users/register/${usuario._id}</a>
                    
                            </div>`
                  };
                
                   transporter.sendMail (mailOptions, function(error, info){
                    if (error) {
                        res.json({
                            message: "No se a podedido establecer conexion con el servidor de correo intentelo mas tarde",
                            
                        });
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.json({
                            message: "null",
                            user: usuario,
                            
                        })
                        usuario.save(); 
                    }
                  });
            }
              
               
        }

    
        
        
        
        
        
       
    }
    
});



router.post("/edit/", async (req,res) => {
    console.log(req.body);
    const { user, subscription} = req.body;
    const usuario = await User.findOne({user});
    usuario.subscription = subscription;
    await User.findOneAndUpdate({user},usuario);

    
})

router.delete("/:id", async (req,res) => {
    const usuario = await User.findById(req.params.id);
    await User.findByIdAndDelete(req.params.id);
    res.json({
        user: usuario,
    });
})

module.exports = router;