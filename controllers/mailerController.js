const nodemailer = require("nodemailer");

class mailerController {
  enviarMails = async (req, res) => {
    let mails = req.body;
 
    
    console.log("******************", mails);
    for (let i = 0; i < mails.length; i++) {
      let mailDestino = mails[i];
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "websorteoweb@gmail.com",
          pass: "nqqehobnazwkknos",
        },
      });

      var mailOptions = {
        from: "SHURRY SHOP",
        to: mailDestino,
        subject: `Han compartido una lista de compra contigo`,
        text: ` Alguien ha compartido una cesta de ShurryShop contigo`,
        
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  };
}

module.exports = new mailerController();