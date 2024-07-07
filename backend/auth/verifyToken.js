import jwt from 'jsonwebtoken';
import Nursery from '../models/NurserySchema.js';
import User from '../models/UserSchema.js';

export const authenticate = async (req, res, next) => {
    // 1. Get token from HTML headers
    const authToken = req.headers.authorization;

    // 2. Check if token exists and starts with 'Bearer '
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: "No token, authentication denied"
        });
    }

    // 3. Extract the token from the 'Bearer ' prefix
    const token = authToken.split(' ')[1];

    try {
        // // 4. Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // // 5. Find the user or nursery based on the decoded token
        req.userId = decoded.id;
        req.role = decoded.role;
        
        next();
    } catch (err) {
        if(err.name == "TokenExpiredError"){
            return res.status(401).json({
                message: "Token is expired"
            });
        }
        return res.status(401).json({
            success: false,
            message: "Token is not valid"
        });
    }
};

export const restrict = (roles) => async(req,res,next) => {
    const userId = req.userId;

    let user;

    const customer = await User.findById(userId);
    const nursery = await Nursery.findById(userId);

    if(customer){
        user = customer;
    }
    if(nursery){
        user = nursery;
    }
    if(!roles.includes(user.role)){
        return res.status(401).json({
            success: false,
            message: "You're not authorized"
        })
    }
    next();
}
