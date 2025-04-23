import { Course } from "../../../databases/models/course.model.js"
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/appError.js"



export const allCourses = catchError(async(req, res, next) => {
    let courses = await Course.find()
    return courses.length == 0 ?  next (new AppError("not founded Courses" , 401)) 
                                  : res.json({message:"success" , courses})
      
})

export const singleCourse = catchError(
    async(req, res, next) => {
    let course = await Course.findById(req.params.id)
     return course ? res.json({message:"success" , course})
                   : next (new AppError("not Found" , 401))
    }
    
)


export const addCourse = catchError(async (req, res, next) => {
    
    if (req.file) {
        req.body.image = req.file.filename
     }
    let course = new Course(req.body)
    await course.save()
    res.json({message:"success" , course})
})

export const updateCourse = catchError(async(req, res, next) => {
    let course = await Course.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new:true}
    )
   return course ? res.json({message:"success" , course})
                   : next (new AppError("not Found" , 401))
    }
)

export const deleteCourse = catchError(async(req, res, next) => {
    let course = await Course.findByIdAndDelete(
        req.params.id, 
     )
    return course ? res.json({message:"success" , course})
                   : next (new AppError("not Found" , 401))
})