import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:Array,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subcategory:{ 
        type:String,
        required:true
    },
    sizes:{
        type:Array,
        required:true
    },
    bestseller:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const productmodel=mongoose.models.product || mongoose.model("products",productSchema);
export default productmodel;