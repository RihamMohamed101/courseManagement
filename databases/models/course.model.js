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


schema.post('init', function (doc) {
    if (doc.image)
        doc.image = process.env.BASE_URL+"uploads/"+ doc.image
    
})


export const Course = model('Course' , schema)


