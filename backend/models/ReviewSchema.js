import mongoose from "mongoose";
import Nursery from "./NurserySchema.js";

const reviewSchema = new mongoose.Schema(
    {
        nursery: {
          type: mongoose.Types.ObjectId,
          ref: "Nursery",
        },
        user: {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
        reviewText: { 
          type: String, 
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 0,
          max: 5,
          default: 0,
        },
      },
      { timestamps: true } 
)

// middleware function 
reviewSchema.pre(/^find/,function(next){
  this.populate({
      path: "user",
      select:"name photo"
  })

  next();
})

reviewSchema.statics.calcAverageRatings = async function(nurseryId){
  // This points the current review
  // Aggregate func --> filter, group, sort, match data
  const stats = await this.aggregate([
    {
      $match: {nursery: nurseryId},
    },
    {
      $group: {
        _id: "$nursery",
        numOfRating: {$sum: 1},
        avgRating: {$avg: "$rating"},
      },
    },
  ]);
  await Nursery.findByIdAndUpdate(nurseryId,{
    totalRatings: stats[0].numOfRating,
    averageRatings: stats[0].avgRating,
  })
}

reviewSchema.post("save",function() {
  this.constructor.calcAverageRatings(this.nursery);
})

export default mongoose.model("Review", reviewSchema);