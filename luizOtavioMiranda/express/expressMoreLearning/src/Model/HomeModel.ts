import mongoose from "mongoose"



const HomeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String
})

export const HomeModel = mongoose.model("Home", HomeSchema)