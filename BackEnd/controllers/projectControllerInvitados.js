var con = require('../config');

    var controller = {
        getInvitados: function (req, res) {
            let sql = 'SELECT * from invitados';
            con.query(sql, function (err, result) {
                if (err) {
                    return res.send(err);
                } else {
                    return res.send(result);
                }
            });
        },

        postInvitados: function (req, res) {
            let sql = `INSERT INTO invitados (nombre,apellido,email,password,rol) VALUES ('${req.body.nombre}','${req.body.apellido}','${req.body.email}','${req.body.password}','${req.body.rol}')`;
            con.query(sql, function (err, result) {
                if (err) {
                    return res.send(err);
                }
                else {
                    let invitado = {
                        id: result.insertId,
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email:req.body.email,
                        password:req.body.password,
                        rol:req.body.rol
                    }
                     return res.send(invitado);
                }
            });
        },
        invitadoUpdate: function (req, res) {
            let sql = `UPDATE invitados set nombre='${req.body.nombre}',Apellido='${req.body.apellido}',email='${req.body.email}',password='${req.body.password}',id_alergia='${req.body.id_alergia}', confirmacion='${req.body.confirmacion}',parte='${req.body.parte}',familia='${req.body.familia}', fiestapreboda='${req.body.fiestapreboda}',comentarios='${req.body.comentarios}' where id = ${req.body.id}`;
            con.query(sql, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    let invitado = {
                        id: result.insertId,
                        nombre: req.body.nombre,
                        Apellido: req.body.apellido,
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
    
        deleteInvitados:function (req, res) {
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