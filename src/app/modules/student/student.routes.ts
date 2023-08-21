import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validations';

const router = express.Router();

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudent
);

router.post(
  '/create-student',
  validateRequest(StudentValidation.createStudentZodSchema),
  StudentController.createStudent
);
router.delete('/:id', StudentController.deleteStudent);
router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);

export const StudentRoutes = router;
