
import express from 'express'
import cors from "cors"
import 'dotenv/config'
import { bootsrab } from './src/modules/bootstrab.js'
import { dbConnection } from './databases/dbConnection.js'
import { globalError } from './src/middleware/globalError.js'
import { AppError } from './src/utils/appError.js'

const app = express()
const port = process.env.PORT || 3000 

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads/'))

bootsrab(app)


app.use('/', (req, res, next) => {
    next(new AppError(`Can't find on this server!`, 409))
})

app.use(globalError)

app.listen(port,
    () => console.log(`Example app listening on port ${port}!`))