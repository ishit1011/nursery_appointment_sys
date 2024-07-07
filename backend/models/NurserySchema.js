import mongoose from "mongoose";

const NurserySchema = new mongoose.Schema({ 
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    phone: {type: Number},
    photo: {type: String}, 
    ticketPrice: {type: Number},
    role: {type: String,},
    specialization: {type: String},
    qualifications: {type: Array,}, // mention certifications
    experiences: {type: Array,},
    bio: {type: String, maxLength: 50},
    about: {type: String},
    timeSlots: {type: Array},
    reviews: [{type: mongoose.Types.ObjectId, ref: "Review"}],
    averageRatings: {type: Number, default: 0,},
    totalRatings: {type: Number, default: 0,},
    isApproved: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",},
    appointments: [{type: mongoose.Types.ObjectId, ref: "Appointment"}],
});

export default mongoose.model("Nursery", NurserySchema);