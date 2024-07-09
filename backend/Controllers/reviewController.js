import Review from "../models/ReviewSchema.js";
import Nursery from '../models/NurserySchema.js';

// 1. Get all reviews
export const getAllReviews = async(req,res) =>{
    try {
        const reviews = await Review.find({});

        res.status(200).json({
            success: true,
            message: "Successful",
            data: reviews
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })
    }
}


// 2. Post review
export const createReview = async(req,res) =>{

    if(!req.body.nursery) req.body.nursery =  req.params.nurseryId;
    if(!req.body.user)  req.body.user = req.userId;

    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();

        await Nursery.findByIdAndUpdate(req.body.nursery, {
            $push: {reviews : savedReview._id},
        })
        
        res.status(200).json({
            success: true,
            message: "Review submitted",
            data: savedReview
        })

    } catch (err) {
        res.status(200).json({
            success: false,
            message: err.message
        })
    }
     
}