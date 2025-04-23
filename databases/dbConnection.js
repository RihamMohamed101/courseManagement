import mongoose from "mongoose";



export const dbConnection = mongoose.connect("mongodb+srv://Riham:0ahCUTj7HjinJ8wI@cluster0.rs75a.mongodb.net/courseMangement").then(() => {
      console.log("databaeConnect");
})
