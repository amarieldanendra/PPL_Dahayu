import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req,res){
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB)

    const review = await db.collection("product").aggregate([
        {
          $lookup: {
            from: "review",
            localField: "_id",
            foreignField: "productId",
            as: "reviews"
          }
        },
        {
          $match: {
            "reviews": {
              $elemMatch: {
                "rating": { $gte: 4 }
              }
            }
          }
        },
        {
          $addFields: {
            averageRating: { $avg: "$reviews.rating" }
          }
        },
        {
          $match: {
            averageRating: { $gte: 4 }
          }
        },
        {
          $project: {
            _id: 1,
            name: 1,
            productName: 1,
            brand: 1,
            productSize: 1,
            price: 1,
            productImg: 1,
            averageRating: {
              $round: [{ $avg: "$reviews.rating" }, 1]
            }
          }
        }
      ]).toArray()

    return res.json(review);
}