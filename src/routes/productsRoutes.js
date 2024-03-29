
const path = require('path')
const express =require('express');
const multer = require('multer');

const router = express.Router();

//const controller = require ('../controllers/productController');
const upload = require('../../middlewares/multerProduct');
const dbController = require('../controllers/dbProductsController');
const validationProducts = require('../../middlewares/validationProducts');
const validationProductEdit = require('../../middlewares/validationProdEdit');
const autenticacion = require('../../middlewares/autenticacion');

// Ruta TODOS LOS PRODUCTOS
router.get('/', dbController.productList);
router.get('/category/computadoras', dbController.categoryComputadoras);
router.get('/category/portatiles', dbController.categoryPortatiles);
router.get('/category/accesorios', dbController.categoryAccesorios);

//RUTA DETALLE DE UN PRODUCTO
router.get('/detail/:id' , dbController.detalle);

// RUTA CARRITO DE COMPRAS
router.get('/shop', autenticacion, dbController.carritoCompras);

//RUTA CREAR PRODUCTO
router.get('/add/', autenticacion, dbController.create); 
router.post('/add' , upload.single('imagen'), validationProducts, dbController.store);

//RUTA EDITAR PRODUCTO
router.get('/edit/:id', dbController.edit);
router.put('/edit/:id', upload.single('imagen'), validationProductEdit, dbController.update);

//RUTA ELIMINAR PRODUCTO
router.delete('/delete/:id', dbController.delete);



module.exports = router;