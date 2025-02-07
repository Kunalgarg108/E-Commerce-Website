const addproduct = async (req, res) => {
    try{
        const { name, price, description, sizes,category,subcategory,bestseller } = req.body;
        const image1 =req.files.image1 &&  req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 =req.files.image3 &&  req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        // const newproduct = new productmodel({
        //     name,
        //     price,
        //     description,
        //     image,
        //     countInStock
        // });
        // const product = await newproduct.save();
        console.log("success",name, price, description, sizes,category,subcategory,bestseller );
        console.log("success",image1, image2, image3, image4);
        res.json({success:true, msg:"Product added successfully", product});
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