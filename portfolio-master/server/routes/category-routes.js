const express = require('express')
const router = express.Router()


const CategoryController = require('../controllers/category-controller')

router.post('/category', CategoryController.createCategory)
router.put('/category/:id', CategoryController.updateCategory)
router.delete('/category/:id', CategoryController.deleteCategory)
router.get('/category/:id', CategoryController.getCategoryById)
router.get('/categories', CategoryController.getCategories)


module.exports = router