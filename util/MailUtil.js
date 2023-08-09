const mailer = require('nodemailer');

const sendMail =(to)=>{

    let transporter = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth:{
            user:'enter your email',
            pass:'enter your password',
        }

        

    })
    const mailOptions = {
        from: 'pythonforsamir@gmail.com',
        to: to,
        subject: 'Sending welcoming mail',
        text: 'Welcome to our website',
        html: '<h1>Welcome to our website</h1>'

    }

    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('Email sent:' + info.response);
        }
    })



}
module.exports = sendMail;