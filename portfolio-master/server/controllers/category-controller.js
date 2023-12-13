const Category = require('../models/category-model')

createCategory = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a Category',
            });
        }

        const category = new Category(body);

        const savedCategory = await category.save();

        return res.status(201).json({
            success: true,
            id: savedCategory._id,
            message: 'Category created!',
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

updateCategory = async (req, res) => {
    try {
        const body = req.body;

        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a body to update',
            });
        }

        const category = await Category.findOne({ _id: req.params.id });

        if (!category) {
            return res.status(404).json({
                message: 'Category not found!',
            });
        }

        category.name = body.name;

        await category.save();

        return res.status(200).json({
            success: true,
            id: category._id,
            message: 'Category updated!',
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

deleteCategory = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.id });

        if (!category) {
            return res.status(404).json({
                success: false,
                error: `Category not found`,
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById({ _id: req.params.id });

        if (!category) {
            return res.status(404).json({
                success: false,
                error: `Category not found`,
            });
        }

        return res.status(200).json({
            success: true,
            data: category,
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        if (!categories.length) {
            return res.status(404).json({ success: false, error: `Categories not found` });
        }
        return res.status(200).json({ success: true, data: categories });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ success: false, error: error.message });
    }
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategories,
    getCategoryById,
}