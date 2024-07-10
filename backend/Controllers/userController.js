import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js';
import Nursery from '../models/NurserySchema.js';

export const updateUser = async(req,res) => {
    const id = req.params.id; 

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: req.body,},
            { new:true}
        );

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update"
        });
    }
}

export const deleteUser = async(req,res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully deleted",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete"
        });
    }
}

export const getSingleUser = async(req,res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id).select("-password");

        res.status(200).json({
            success: true,
            message: "User found successfully",
            data: user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to find user"
        });
    }
}


export const getAllUser = async(req,res) => {

    try {
        const users = await User.find({}).select("-password");

        res.status(200).json({
            success: true,
            message: "Users found successfully",
            data: users
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to find users"
        });
    }
}

export const getUserProfile = async(req, res) => {
    try {

        const user = await User.findById(req.userId);

        if(!user){
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const {password, ...rest} = user._doc;

        res.status(200).json({
            success: true,
            message: "Profile info found",
            data: {...rest},
        })
        
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to find user"
        });
    }
}

export const getMyAppointments = async (req, res) => {
    try {
        // 1. Retrieve appointments from booking for specific user
        const bookings = await Booking.find({ user: req.userId });

        // 2. Extract nursery ids from appointment bookings
        const nurseryIds = bookings.map(el => el.nursery._id || el.nursery.id);

        // 3. Retrieve nurseries using nursery ids
        const nurserys = await Nursery.find({ _id: { $in: nurseryIds } }).select("-password");

        res.status(200).json({
            success: true,
            message: "Appointments retrieved successfully",
            data: nurserys,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message // Including the error message for better debugging
        });
    }
};
