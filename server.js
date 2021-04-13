//install dotenv 
require('dotenv').config();
//call nodemailer
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const path = require('path');
// step 1 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
const handelbarOptions = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve(__dirname, "views"),
        defaultLayout: false,
    },
    viewPath: path.resolve(__dirname, "views"),
    extName: ".handlebars",
}
transporter.use('compile', hbs(handelbarOptions));
// Step 2
const mailOptions = {
    from: 'aymen@gmail.com',
    to: 'bouazzanadhem@gmail.com',
    subject: 'Ramadan',
    text: 'Ramadan Mubarek',
    attachments: [{
        filename: 'ramadan.JPG',
        path: './ramadan.jpg'
    }],
    template: 'index'
};

// step3 
transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('Error Occurs', err);
    } else {
        console.log('Email sent !!!!');
    }
})
module.exports = transporter