
var ProjectControllerGaleria = require('./controllers/projectControllerGaleria');
var ProjectControllerTodo = require('./controllers/projectControllerTodo');
var ProjectControllerForm = require('./controllers/projectControllerForm');
var ProjectControllerAdmin = require('./controllers/projectControllerAdmin');


var ProjectControllerExample = require('./controllers/projectControllerExample');
var app = require('./app');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './public/img' });

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


app.post('/users/login', UsersController.loginUser);

app.get('/', function (req, res) {
    res.render('newIndex');
});
app.get('/form', function (req, res) {
    res.render('form');
});
app.get('/invitaciones', function (req, res) {
    res.render('invitaciones');
});
app.get('/index', function (req, res) {
    res.render('index');
});
app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/example', function (req, res) {
    res.render('example');
});

app.get('/admin', function (req, res) {
    res.render('admin');
});
app.get('/todoInvitado', function (req, res) {
    res.render('todoInvitado');
});
app.get('/todoProveedor', function (req, res) {
    res.render('todoProveedor');
});
app.get('/logout', function (req, res) {
    res.render('logout');
});

app.get('/galeria/get', ProjectControllerGaleria.getFotos);

app.get('/galeria/get2', ProjectControllerGaleria.getFotos2);

app.post('/galeria/add', ProjectControllerGaleria.galeriaAdd);

app.post('/galeria/delete', ProjectControllerGaleria.galeriaDelete);

app.post('/galeria/add2', multipartMiddleware, ProjectControllerGaleria.galeriaAdd2);

app.get('/todo/get', ProjectControllerTodo.getTareasUser);

app.post('/todo/add', ProjectControllerTodo.todoAdd);

app.post('/todo/update', ProjectControllerTodo.todoUpdate);

app.post('/cliente/add', ProjectControllerForm.clienteAdd);

app.post('/cliente/login', ProjectControllerForm.loginUser);

app.get('/cliente/logout', ProjectControllerForm.logoutUser);

app.get('/cliente/get', ProjectControllerForm.clienteGet);

app.post('/cliente/delete', ProjectControllerForm.clienteDelete);

app.post('/cliente/update', ProjectControllerForm.clienteUpdate);

app.get('/example', ProjectControllerExample.example);

app.get('/admin/get', ProjectControllerAdmin.adminGet);

app.post('/admin/update', ProjectControllerAdmin.adminUpdate);

module.exports = app;