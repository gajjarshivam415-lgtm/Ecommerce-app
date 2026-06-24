import Product from '../models/product.model.js'

export const createProduct = async (req, res) =>{
    try {
        const product = await Product.create(req.body)
        res.json({
            message:'Product successful created.',
            product
        })
    } catch (err) {
        res.status(500).json('server error.' || err.message)
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 })
        res.json({products}) 
    } catch (err) {
        res.status(500).json('server error.' || err.message)
    }
}

export const UpdateProduct = async (req, res) => {
    try {
        const update = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({message:'Product update successfully.',update})
        
    } catch (err) {
        res.status(500).json('server error' || err.message)
    }
}

export const DeleteProduct = async (req, res) => {
    try{
    const delate = await Product.findByIdAndDelete(req.params.id)
    res.json({message:'Successful deleted.'})
    }catch(err){
        res.status(500).json('server error' || err.message)
    }
}