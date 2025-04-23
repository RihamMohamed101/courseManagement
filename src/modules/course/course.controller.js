import { Course } from "../../../databases/models/course.model.js"
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/appError.js"



export const allCourses = catchError(async(req, res, next) => {
    let courses = await Course.find()
    return courses.length == 0 ?  next (new AppError("not founded Courses" , 404)) 
                                  : res.status(200).json({message:"success" , courses})
      
})

export const singleCourse = catchError(
    async(req, res, next) => {
    let course = await Course.findById(req.params.id)
     return course ? res.status(200).json({message:"success" , course})
                   : next (new AppError("not Found" , 404))
    }
    
)


export const addCourse = catchError(async (req, res, next) => {
    
    if (req.file) {
        req.body.image = req.file.filename
     }
    let course = new Course(req.body)
    await course.save()
    res.status(201).json({message:"success" , course})
})

export const updateCourse = catchError(async(req, res, next) => {
    let course = await Course.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new:true}
    )
   return course ? res.status(200).json({message:"success" , course})
                   : next (new AppError("not Found" , 404))
    }
)

export const deleteCourse = catchError(async(req, res, next) => {
    let course = await Course.findByIdAndDelete(
        req.params.id, 
     )
    return course ? res.status(200).json({message:"success" , course})
                   : next (new AppError("not Found" , 404))
})