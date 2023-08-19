import { Response, Request } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationField } from '../../../constants/paginations';
import { academicDepartmentFilterableFields } from './academicDepartment.constant';
import { AcademicDepartment } from '@prisma/client';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicDepartmentData } = req.body;
    const result = await AcademicDepartmentService.createAcademicDepartment(
      academicDepartmentData
    );

    sendResponse<AcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department created successfully!',
      data: result,
    });
  }
);

const getAllAcademicDepartments = catchAsync(
  async (req: Request, res: Response) => {
    console.log('req.headers', req.headers.authorization);
    console.log('req.', req.user);
    const filterOptions = pick(req.query, academicDepartmentFilterableFields);
    const paginationOptions = pick(req.query, paginationField);

    const result = await AcademicDepartmentService.getAllAcademicDepartments(
      filterOptions,
      paginationOptions
    );

    sendResponse<AcademicDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getAcademicDepartmentById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.getSingleAcademicDepartment(
      id
    );

    sendResponse<AcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department retrieved successfully!',
      data: result,
    });
  }
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getAcademicDepartmentById,
};
