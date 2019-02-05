var con = require('../config');
var bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

var controller = {
    getInvitados: function (req, res) {
        // jwt.verify(req.token, 'secretkey', (err, authData) => {
        //     if (err) {
        //         res.sendStatus(403);
        //     } else {
        let sql = `SELECT * from invitados where id_boda = '${req.body.id_boda}'}`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                return res.send(result);
            }
        });
    },
    // })ojo que tienes que añadir un corchete!!!!!!!!

    getInvitadosModificar: function (req, res) {
        // jwt.verify(req.token, 'secretkey', (err, authData) => {
        //     if (err) {
        //         res.sendStatus(403);
        //     } else {
       
        let sql = `SELECT * from invitados where id_boda=${req.query.idb} and id=${req.query.id}`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                return res.send(result);
            }
        });
    },

    postInvitados: function (req, res) {
        let password = req.body.password;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, null, function (err, hash) {
                password = hash;
                let sql = `INSERT INTO invitados (nombre,apellido,email,password,rol,id_boda) VALUES ('${req.body.nombre}','${req.body.apellido}','${req.body.email}','${password}','${req.body.rol}','${req.body.id_boda}')`;
                con.query(sql, function (err, result) {
                    if (err) {
                        return res.send(err);
                    }
                    else {
                        let invitado = {
                            id: result.insertId,
                            nombre: req.body.nombre,
                            apellido: req.body.apellido,
                            email: req.body.email,
                            rol: req.body.rol,
                            id_boda: req.body.id_boda
                        }
                        return res.send(invitado);
                    }
                });
            });
        });
    },
    invitadoUpdate: function (req, res) {
        let sql = `UPDATE invitados set nombre='${req.body.nombre}',apellido='${req.body.apellido}',email='${req.body.email}',password='${req.body.password}',id_alergia='${req.body.id_alergia}', confirmacion='${req.body.confirmacion}',parte='${req.body.parte}',familia='${req.body.familia}', fiestapreboda='${req.body.fiestapreboda}',comentarios='${req.body.comentarios}' where id = ${req.body.id} and id_boda=${req.body.id_boda}`;
        con.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                let invitado = {
                    id: result.insertId,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    email: req.body.email,
                    password: req.body.password,
                    id_alergia: req.body.id_alergia,
                    confirmacion: req.body.confirmacion,
                    parte: req.body.parte,
                    familia: req.body.familia,
                    fiestapreboda: req.body.fiestapreboda,
                    comentarios: req.body.comentarios
                }
                res.send(invitado);
            }
        });
    },

    deleteInvitados: function (req, res) {
        let sql = `DELETE FROM invitados where id = ${req.body.id}`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                return res.send(result);
            }
        });
    },
};

module.exports = controller; 