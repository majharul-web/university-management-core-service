import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';
import pick from '../../../shared/pick';
import { academicSemesterFilterAbleFields } from './academicSemester.constant';
import { paginationField } from '../../../constants/paginations';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const academicSemesterData = req.body;
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData
    );

    sendResponse<AcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    });
  }
);

const getAllAcademicSemesters = catchAsync(
  async (req: Request, res: Response) => {
    const filterOptions = pick(req.query, academicSemesterFilterAbleFields);
    const paginationOptions = pick(req.query, paginationField);

    const result = await AcademicSemesterService.getAllAcademicSemesters(
      filterOptions,
      paginationOptions
    );

    sendResponse<AcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.getSingleAcademicSemester(id);

    sendResponse<AcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester retrieved successfully!',
      data: result,
    });
  }
);

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const result = await AcademicSemesterService.updateAcademicSemester(
      id,
      data
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AcademicSemester updated successfully',
      data: result,
    });
  }
);
const deleteAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicSemesterService.deleteAcademicSemester(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AcademicSemester deleted successfully',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester,
};
