const joi = require("@hapi/joi");

const schema = {
    user: joi.object({
        user: joi.string().max(20).message("El usuario solo puede tener 20 caracteres").required(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).message("Solo intruduzca numeros y letras").required(),
    email: joi.string().email().message("Introduzca una direccion email valida").required(),
    telegramuser: joi.string(),
    referido: joi.string(),
    link: joi.string(),
   
   
     
    })
};

module.exports = schema;