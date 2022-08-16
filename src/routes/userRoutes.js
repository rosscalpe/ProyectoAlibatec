const express = require('express');
const router = express.Router();

/*middlewares*/
const validationLogin = require('../../middlewares/validationLogin');
const validationRegister = require('../../middlewares/validationRegister');
const usuarioLogeado = require('../../middlewares/usuarioLogeado');
const autenticacion = require('../../middlewares/autenticacion');
const upload = require('../../middlewares/multerRegister');

/* controller */
//const dbUserController = require ('../controllers/dbUserController');
const userController = require('../controllers/usersController');

/*Rutas*/
//Formulario de Login
//router.get('/login', usuarioLogeado ,dbUserController.login);
router.get('/login', usuarioLogeado ,userController.login);

//Proceso de login
//router.post('/login',validationLogin, dbUserController.processlogin);
router.post('/login',validationLogin, userController.processlogin);

//Formulario de registro
//router.get('/register', usuarioLogeado, dbUserController.register);
router.get('/register', usuarioLogeado, userController.register);

//Proceso de registro
//router.post('/register', upload.single('image'), validationRegister, dbUserController.processRegister);
router.post('/register', upload.single('image'), validationRegister, userController.processRegister);

//Perfil
//router.get('/profile/:id', autenticacion , dbUserController.profile);
router.get('/profile/:id', autenticacion , userController.profile);

//Edicion Usuario
// router.get('/userEdit/:id', dbUserController.userEdit);
// router.put('/userEdit/:id', upload.single('image'), dbUserController.update);

//Eliminar Usuario
// router.delete('/delete/:id', dbUserController.delete);

//Logout
//router.get('/logout', dbUserController.logout);
router.get('/logout', userController.logout);


module.exports = router;