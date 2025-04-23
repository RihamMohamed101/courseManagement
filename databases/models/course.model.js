import { model, Schema } from "mongoose";




const schema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    
    description: {
        type: String,
        required: true,
        trim: true,
        min:10
    },

    image: String, 

    startDate: Date,
    endDate: Date,
    price: {
        type: Number,
        required:true,
    }

}, {
    versionKey: false,
    timestamps:true
})




export const Course = model('Course' , schema)


