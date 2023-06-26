import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterdata } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterdata
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic demester is created successfully',
      data: result,
    });
    next();
  }
);

export const AcademicSemesterController = {
  createSemester,
};
