const express = require('express')
const ejs = require('ejs');
const router = express.Router();
const nodemailer = require('nodemailer')
const app = express()
const path = require('path')
const fs = require('fs');
const passport = require('passport')
require('dotenv').config();
app.set('views', './views');
app.set('view engine', 'ejs');


router.get('/sendmailv1',passport.authenticate('bearer',{session:false}), async (req, res) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '""Name Lastname 👻" <example@gmail.com>', // sender address
        to: "example@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>HTML</b>", // html body
    });

    res.json({ message: 'email sent !', URL: nodemailer.getTestMessageUrl(info) })
})

router.get('/sendmailv2',passport.authenticate('bearer',{session:false}), async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });
    const templatePath = path.resolve('./views','register.html');
    console.log(templatePath);
    const registerTemplate = fs.readFileSync(templatePath, {encoding:'utf-8'})
    console.log(registerTemplate);
    const render= ejs.render(registerTemplate,{name:'aymen'})
     const info = await transporter.sendMail({
        from: '"Name Lastname 👻" <example@gmail.com>', // sender address
        to: "aymenbouazra994@gmail.com",
        subject: "Waaa ✔", // Subject line
        // html: registerTemplate
        html: render
    });

    res.json({ message: 'email sent !' })
})
module.exports = router;