
var ProjectControllerGaleria = require('./controllers/projectControllerGaleria');
var ProjectControllerTodo = require('./controllers/projectControllerTodo');
var ProjectControllerForm = require('./controllers/projectControllerForm');
var ProjectControllerAdmin = require('./controllers/projectControllerAdmin');
var ProjectControllerExample = require('./controllers/projectControllerExample');
var ProjectControllerLogin= require('./controllers/ProjectControllerLogIn');


////////// CONTROLERS WEDDINGCLOUD//////

var ProjectControllerinvitados = require('./controllers/projectControllerInvitados');
var ProjectControllerAdmin = require('./controllers/projectControllerAdmin2');



var app = require('./app');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './public/img' });
const jwt = require('jsonwebtoken');

app.get('/galeria', function (req, res) {
    res.render('galeria');
});

var UsersController = require('./controllers/projectControllerForm');
app.post('/users/register', ProjectControllerForm.clienteAdd);

//rutas


var auth = function (req, res, next) {
    
    if (req.session.user) {
        return next();
    } else {
        return res.sendStatus(404);
    }
};

app.get('/todo', auth, function (req, res) {
    res.render('todo', {
        email: req.session.user.email
    });
});

////////////////////////WEDDINGCLOUD////////////////////


app.get('/invitados/get', ProjectControllerinvitados.getInvitados);
app.get('/invitados/getMofificar', ProjectControllerinvitados.getInvitadosModificar);
app.post('/invitados/post', ProjectControllerinvitados.postInvitados);
app.post('/invitados/delete', ProjectControllerinvitados.deleteInvitados);
app.post('/invitados/update', ProjectControllerinvitados.invitadoUpdate);
app.post('/invitados/updateMesa', ProjectControllerinvitados.invitadoUpdateMesa);
app.post('/invitados/avatar', multipartMiddleware, ProjectControllerinvitados.avatar);
app.post('/log/logIn', ProjectControllerLogin.loginUser);


app.get('/admin/preboda', ProjectControllerAdmin.getPreboda);
app.get('/admin/confirmados', ProjectControllerAdmin.getConfirmados);
app.get('/admin/alergias', ProjectControllerAdmin.getAlergia);
app.get('/admin/noviofamilia', ProjectControllerAdmin.getNovioFamilia);
app.get('/admin/noviafamilia', ProjectControllerAdmin.getNoviaFamilia);
app.get('/admin/novioAmigos', ProjectControllerAdmin.getNovioAmigos);
app.get('/admin/noviaAmigos', ProjectControllerAdmin.getNoviaAmigos);



function veryfyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader != 'undefined' ){
        const bearer = bearerHeader.split(' ');
        const bearerToken= bearer[1];
        req.token=bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

// app.get('/galeria/get', ProjectControllerGaleria.getFotos);

// app.get('/galeria/get2', ProjectControllerGaleria.getFotos2);

// app.post('/galeria/add', ProjectControllerGaleria.galeriaAdd);

// app.post('/galeria/delete', ProjectControllerGaleria.galeriaDelete);

// app.post('/galeria/add2', multipartMiddleware, ProjectControllerGaleria.galeriaAdd2);

// app.get('/todo/get', ProjectControllerTodo.getTareasUser);

// app.post('/todo/add', ProjectControllerTodo.todoAdd);

// app.post('/todo/update', ProjectControllerTodo.todoUpdate);

// app.post('/cliente/add', ProjectControllerForm.clienteAdd);

// app.post('/cliente/login', ProjectControllerForm.loginUser);

// app.get('/cliente/logout', ProjectControllerForm.logoutUser);

// app.get('/cliente/get', ProjectControllerForm.clienteGet);

// app.post('/cliente/delete', ProjectControllerForm.clienteDelete);

// app.post('/cliente/update', ProjectControllerForm.clienteUpdate);

// app.get('/example', ProjectControllerExample.example);

// app.get('/admin/get', ProjectControllerAdmin.adminGet);

// app.post('/admin/update', ProjectControllerAdmin.adminUpdate);

module.exports = app;