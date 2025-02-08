import express from 'express';
import {  listproducts, addproduct, removeproduct,singleproduct } from '../controllers/productcontroller.js';
import upload from '../middleware/multer.js';   
import adminauth from '../middleware/adminauth.js';
const productRouter = express.Router();
productRouter.get('/list',listproducts);
productRouter.post('/add', adminauth,upload.fields([
    {name:'image1',maxCount:1},
    {name:'image2',maxCount:1},
    {name:'image3',maxCount:1},
    {name:'image4',maxCount:1},
]),addproduct);
productRouter.post('/remove', adminauth,removeproduct);
productRouter.post('/single', singleproduct);

export default productRouter;