var b_auth = require('basic-auth');
var u_auth = require('./user');

module.exports = {
  is_admin: function (req, res, next) {
    var credentials = b_auth(req);
    var auth_string = req.get("Authorization");
    if (req.session && req.session.user) {
      auth_string = req.session.user;
      credentials = b_auth.parse(req.session.user);
    } 

    if (credentials && credentials.name && credentials.pass) {
      u_auth.isAdmin(credentials.name, credentials.pass, function (result, err) {
        req.credentials = credentials;
        req.is_admin = result;
        req.auth_err = err;
        req.auth_string = auth_string;
        next();
      });
    } else {
      req.credentials = credentials;
      req.is_admin = false;
      req.auth_err = null;
      next();
    }
  },
  require_admin: function (req, res, next) {
    var credentials = b_auth(req);
    var auth_string = req.get("Authorization");
    if (req.session && req.session.user) {
      auth_string = req.session.user;
      credentials = b_auth.parse(req.session.user);
    } 

    if (credentials && credentials.name && credentials.pass) {
      u_auth.isAdmin(credentials.name, credentials.pass, function (result, err) {
        if (result) {
          req.credentials = credentials;
          req.is_admin = result;
          req.auth_string = auth_string;
          next();
        } else {
          res.sendStatus(401);
        }
      });
    } else {
      res.sendStatus(401);
    }
  }
}
