import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectdb from './config/mongodb.js';
import connectcloud from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
const app=express();
const port =process.env.PORT || 5000;
connectdb();
connectcloud();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('API working');
});
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});