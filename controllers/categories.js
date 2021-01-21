const Category=require('../models/Category')


//@des     Get categories
//@route    GET /api/v1/categories
//@access   Private/Admin

exports.getCategories = async (req,res,next) =>{
    const categories = await Category.find()

    res.status(200).json({success:true, data:categories})

}