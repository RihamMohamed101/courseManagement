import { Router } from "express";
import { addCourse, allCourses, deleteCourse, singleCourse, updateCourse } from "./course.controller.js";
import { validate } from "../../middleware/validate.js";
import { addCourseSchema, updateCourseSchema } from "./course.validate.js";
import { uploadSingleFile } from "../../fileupload/fileUpload.js";



const courseRouter = Router()

courseRouter.route('/')
    .get(allCourses)
    .post(uploadSingleFile('image'),validate(addCourseSchema),addCourse)
            
courseRouter.route('/:id')
             .delete(deleteCourse)
             .put(uploadSingleFile('image'),validate(updateCourseSchema),updateCourse)
             .get(singleCourse)



export default courseRouter