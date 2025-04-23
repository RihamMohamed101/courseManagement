
import Joi from 'joi';

export const addCourseSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().min(10).required(),
  image: Joi.object({
  fieldname: Joi.string().required(),       
  originalname: Joi.string().required(),    
  encoding: Joi.string().required(),        
  mimetype: Joi.string()
    .valid('image/jpeg', 'image/png', 'image/gif', 'image/jpg')
    .required(),  
  size: Joi.number()
    .max(5242880)  
    .required(),  
   destination: Joi.string().required(),  
  filename: Joi.string().required(),     
  path: Joi.string().required()          
}),
  startDate: Joi.date().optional(),
  endDate: Joi.date().optional(),
  price: Joi.number().required(),
});



export const updateCourseSchema = Joi.object({
  title: Joi.string().trim(),
  description: Joi.string().trim().min(10),
  image: Joi.object({
  fieldname: Joi.string().required(),       
  originalname: Joi.string().required(),    
  encoding: Joi.string().required(),        
  mimetype: Joi.string()
    .valid('image/jpeg', 'image/png', 'image/gif', 'image/jpg')
    .required(),  
  size: Joi.number()
    .max(5242880)  
    .required(),  
  destination: Joi.string().required(),  
  filename: Joi.string().required(),     
  path: Joi.string().required()          
}),
  startDate: Joi.date(),
  endDate: Joi.date(),
  price: Joi.number(),
 id: Joi.string().hex().length(24).required(),

})
