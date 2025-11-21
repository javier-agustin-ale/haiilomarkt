import Product from '../models/product.js';

export const getAllProducts = async (req, res) => {
	const products = await Product.findAll();
	res.json(products);
};

export const createProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(201).json(product);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
