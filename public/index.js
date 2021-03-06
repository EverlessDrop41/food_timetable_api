var express = require('express');
var router = express.Router();
var auth = require('../auth');
//Messages should be in the format { type: TYPE, message: MESSAGE }
//Types can be success, info, warning, danger
router.all('*', auth.middleware.is_admin, function (req, res, next) {

	if (req.session.DNRTD) {
		req.session.templateData.is_admin = req.is_admin;
		req.session.templateData.auth_string = "APPLE";
		req.session.DNRTD = false;
	} else {
		req.session.templateData = {is_admin: req.is_admin, auth_string: req.auth_string, messages: []};
	}	
	next();
});

router.use('/', require("./public"));
router.use('/user', require("./user"));
router.use('/admin', require("./admin"));

module.exports = router;