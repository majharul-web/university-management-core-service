import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  AcademicDepartmentController.createAcademicDepartment
);

router.get('/:id', AcademicDepartmentController.getAcademicDepartmentById);

router.get('/', AcademicDepartmentController.getAllAcademicDepartments);

export const AcademicDepartmentRoutes = router;
