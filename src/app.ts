import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Applications routes
app.use('/api/v1/users/', userRouter)

//Tesing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
