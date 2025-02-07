import express from 'express';
import {  listproducts, addproduct, removeproduct,singleproduct } from '../controllers/productcontroller.js';
import upload from '../middleware/multer.js';   
const productRouter = express.Router();
productRouter.get('/list', upload.fields([
    {name:'image1',maxCount:1},
    {name:'image2',maxCount:1},
    {name:'image3',maxCount:1},
    {name:'image4',maxCount:1},
]),listproducts);
productRouter.post('/add', addproduct);
productRouter.post('/remove', removeproduct);
productRouter.post('/single', singleproduct);

export default productRouter;