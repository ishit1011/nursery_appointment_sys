import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
    {
        nursery: {
            type: mongoose.Types.ObjectId,
            ref: "Nursery", 
            required: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        },
        ticketPrice: {
            type: String,
            required: true, 
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'cancelled'],
            default: 'pending',
        },
        isPaid: {
            type: Boolean,
            default: true,
        },
    },
    // Defines created at & removed at times
    {
        timestamps: true
    }
);

export default mongoose.model("Booking",bookingSchema);