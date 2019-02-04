var con = require('../config');
var bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

var controller = {
    loginUser: function (req, res) {
        let sql = `SELECT * from invitados where email ='${req.body.email}'`;

        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                if (result == "") {
                    return res.send('Email introducido no válido');
                } else {
                    bcrypt.compare(req.body.password, result[0].password, function (err, iguales) {
                        if (err) {
                            return res.send(err)
                        } else {
                            if (iguales) {
                                return res.send(result[0]);
                                console.log('ok')
                            } else {
                                return res.send('La contraseña no es correcta')
                            };
                        };
                    });
                };
            };
        });
        jwt.sign(`${req}`, 'secretkey', (err, token) => {
            res.json({
                token
            });
        });

    }
};

    module.exports = controller;