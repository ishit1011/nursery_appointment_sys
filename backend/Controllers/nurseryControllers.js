import Nursery from "../models/NurserySchema.js";

export const updateNursery = async(req,res) => {
    const id = req.params.id;

    try {
        const updatedNursery = await Nursery.findByIdAndUpdate(
            id,
            { $set: req.body,},
            { new:true}
        ).select("-password");

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedNursery,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update"
        });
    }
}

export const deleteNursery = async(req,res) => {
    const id = req.params.id;

    try {
        await Nursery.findByIdAndDelete(id).select("-password");

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

export const getSingleNursery = async(req,res) => {
    const id = req.params.id;

    try {
        const nursery = await Nursery.findById(id).select("-password");

        res.status(200).json({
            success: true,
            message: "Nursery found successfully",
            data: nursery
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to find Nursery"
        });
    }
}


export const getAllNursery = async(req,res) => {

    try {

        const { query } = req.query;
        let nurserys;

        if(query){
            nurserys = await Nursery.find({
                isApproved: "approved",
                $or: [
                    {name: {$regex: query,$options: "i"}},
                    {specialization: {$regex: query,$options: "i"}}
                ]
            }).select("-password")
        }
        else{
            nurserys = await Nursery.find({isApproved: "approved"}).select("-password");
        }


        res.status(200).json({
            success: true,
            message: "Nursery found successfully",
            data: nurserys
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to find nurserys"
        });
    }
}