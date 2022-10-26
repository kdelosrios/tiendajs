const express=require("express")
const router= express.Router();

const {getProducts, newProduct, getProductByID, updateProduct, deleteProduct}=require("../controllers/productsController") // se trae la repsuesta del json desde el controlador

router.route('/productos').get(getProducts) // se define que reuta se queire ver el producto
router.route('/producto/nuevo').post(newProduct); // Se define ruta para crear productos
router.route('/producto/:id').get(getProductByID); // Se define ruta para obtener producto por ID
router.route('/producto/:id').put(updateProduct); // Creación de la ruta de actualización
router.route('/producto/:id').delete(deleteProduct) // creación de la ruta de eliminación por id

module.exports=router;

