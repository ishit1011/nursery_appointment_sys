import User from '../models/UserSchema.js'
import Nursery from '../models/NurserySchema.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'


const generateToken = (user) =>{
                    // payload,                     jwt key,         expiration            
     return jwt.sign({id: user._id, role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn: '15d'
     })
}


export const register = async(req,res) =>{

    //----- REQ: User provides with the following details while signUp ----
    const {email, password, name, role, photo, gender} = req.body;

    try {
        // 1. Check the profession of user
        let user = null;
        if(role == 'customer'){
            user = await User.findOne({email})
        }
        else if(role == 'nursery'){ 
            user = await Nursery.findOne({email})
        }


        // 2. Check if user exixts
        if(user != null){
            return res.status(400).json({
                message: 'User already exist'
            })
        }

        // 3. Steps to take if user doesn't exist
        //     -- Encrypt(Hash) the password: BCRYPTJS

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //     -- Create a new customer or nursery accordingly
        if(role == 'customer'){
            user = new User({
                name,
                email,
                password: hashedPassword,
                photo,
                gender,
                role
            }) 
        }

        if(role == 'nursery'){
            user = new Nursery({
                name,
                email,
                password: hashedPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()
        res.status(200).json({
            success: true,
            message: 'User successfully created'
        })

        
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error, Try again'
        })
    }
}

export const login = async(req,res) =>{

    //----- REQ: User provides with the following details while login ----
    const {email, password} = req.body;

    try {

        let user = null;

        // 1. Check is the email is of a "customer" / "nursery"
        const nursery = await Nursery.findOne({email})
        const customer = await User.findOne({email})

        // 2. Assign the user role according to the schema it is found in
        if(customer){
            user = customer;
        }
        if(nursery){
            user = nursery;
        }

        // 3. What if user is found in no schema
        if(user == null){
            return res.status(404).json({
                message: "User not found"
            })
        }

        // 4. Check if given password matches with password in DB
        const isPass = bcrypt.compare(req.body.password,user.password);
        if(!isPass){
            return res.status(400).json({
                status: false,
                message: "Invalid credentials"
            })
        }

        // 5. If password matches ---> generate JWT token
        const token = generateToken(user);

        // Destructure user object properties
        const { password: _, role, appointments, ...rest } = user._doc;

        res.status(200).json({
            status: true,
            message: "Successful Login",
            token,
            data: rest,
            role
        });
         
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: "Failed to Login"
        })
    }
}