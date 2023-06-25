import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterdata } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterdata
    );
    res.status(200).json({
      success: true,
      message: 'Academic Semester is created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
