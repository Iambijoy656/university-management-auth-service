import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Applications routes
app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semester/', AcademicSemesterRoutes);
// //Tesing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('testing error logger')
// })

//global error handler
app.use(globalErrorHandler);

export default app;
