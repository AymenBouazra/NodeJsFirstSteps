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
const mailOptiions = {
    from: 'aymen@gmail.com',
    to: 'jalleboumaima@gmail.com',
    subject: 'Bonsoir :*',
    text: '',
    attachments: [{
        filename: 'Mypic.JPG', path: './Mypic.jpg'
    }],
    template: 'index'
};

// step3 
transporter.sendMail(mailOptiions, function (err, data) {
    if (err) {
        console.log('Error Occurs', err);
    } else {
        console.log('Email sent !!!!');
    }
})
module.exports = transporter