import cloudinary from 'cloudinary';
import productmodel from '../models/productmodel.js';
const addproduct = async (req, res) => {
    try{
        const { name, price, description, sizes,category,subcategory,bestseller } = req.body;
        const image1 =req.files.image1 &&  req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 =req.files.image3 &&  req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        const images = [image1, image2, image3, image4].filter((item)=> item!==undefined);
          
        let imageUrl =await Promise.all(images.map(async (image) => {
            let result =await cloudinary.uploader.upload(image.path,{resource_type:"image"});
            return result.secure_url;
        })
    );


    const productdata = {
        name,
        description,
        price:Number(price),
        category,
        subcategory,
        bestseller:Boolean !=="true"?false:true,
        sizes:JSON.parse(sizes),
        image:imageUrl,
        date:Date.now()
    };
    console.log(productdata);
    const product = new productmodel(productdata);

    await product.save();
    res.json({success:true, msg:"Product added successfully"});

    }
    catch(error){
        console.log(error);
        res.json({success:false, msg:error.message });
    }
};

const listproducts = async (req, res) => {
    try{
        const products = await productmodel.find({});
        res.json({success:true, products});
    }
    catch(error){
        console.log(error);
        res.json({success:false, msg:"Internal server error"});
    }
}
const removeproduct = async (req, res) => {
    try{
        const product = await productmodel.findById(req.params.id);
        if(product){
            await product.remove();
            res.json({success:true, msg:"Product removed successfully"});
        }
    }
    catch(error){
        console.log(error);
        res.json({success:false, msg:"Internal server error"});
    }
};

const singleproduct = async (req, res) => {
    try{
        const product = await productmodel.findById(req.params.id);
        if(product){
            res.json({success:true, product});
        }
    }
    catch(error){
        console.log(error);
        res.json({success:false, msg:"Internal server error"});
    }
};

export { addproduct, listproducts, removeproduct, singleproduct };