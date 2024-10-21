import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';
// import { generateFacultyId } from './app/modules/user/user.utils';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//Applications routes
app.use('/api/v1/', routes);

// //Tesing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('testing error logger')
// })

//global error handler
app.use(globalErrorHandler);

//handle not Found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

// const academicSemester ={
//   code:'01',
//   year:'2025'
// }
// const testId = async()=>{

//   const testId = await generateFacultyId()
//   logger.info(testId)
// }

// testId()

export default app;
