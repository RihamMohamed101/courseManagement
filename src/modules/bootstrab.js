import courseRouter from "./course/course.routes.js"




export const bootsrab = (app) => {
    app.use('/api/courses' , courseRouter)
}