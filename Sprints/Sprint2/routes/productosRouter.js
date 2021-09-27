const express = require ('express');
const router = express.Router();
const productosController = require ('../controllers/productosController')

router.get('/detalle', productosController.detalle);
router.get('/carrito', productosController.carrito)

module.exports = router;