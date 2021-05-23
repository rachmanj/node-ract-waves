const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productsController = require('../controllers/products.controller');
const { addProductValidator } = require('../middleware/validations');

router.post(
  '/',
  auth('createAny', 'product'),
  addProductValidator,
  productsController.addProduct
);

router
  .route('/product/:id')
  .get(productsController.getProductById)
  .patch(auth('updateAny', 'product'), productsController.updateProductById)
  .delete(auth('deleteAny', 'product'), productsController.deleteProductById);

router.get('/all', productsController.allProducts);
router.post('/paginate/all', productsController.paginateProducts);

module.exports = router;
