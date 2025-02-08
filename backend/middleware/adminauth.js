import jwt from 'jsonwebtoken';

const adminauth = async (req, res, next) => {
    try{
        const token = req.headers;
        if(!token){
            return res.json({success:false, msg:"No token, authorization denied"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.role !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, msg:"Not authorized"});
        }
        next();
    }
    catch(error){
        console.log(error);
        res.json({success:false, msg:"Internal server error"});
    }
}

export default adminauth;