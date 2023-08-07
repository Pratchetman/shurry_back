var express = require('express');
const mailerController = require('../controllers/mailerController');
var router = express.Router();


//1.- invitacion a pacientes
//localhost:3000/mailer/
router.post("/", mailerController.enviarMails);

module.exports = router;
