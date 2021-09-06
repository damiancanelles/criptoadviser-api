const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pruebacorreo072103@gmail.com',
    pass: '313ctr0Slayer12' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'pruebacorreo072103@gmail.com',
  to: 'friendsofenron@gmail.com, enemiesofenron@gmail.com',
  subject: 'Confirm Account',
  text: 'Dudes, we really need your money.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});