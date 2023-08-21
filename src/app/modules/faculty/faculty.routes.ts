import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validations';

const router = express.Router();

router.get('/', FacultyController.getAllFaculties);

router.get('/:id', FacultyController.getSingleFaculty);

router.post(
  '/create-faculty',
  validateRequest(FacultyValidation.createFacultyZodSchema),
  FacultyController.createFaculty
);

export const FacultyRoutes = router;
