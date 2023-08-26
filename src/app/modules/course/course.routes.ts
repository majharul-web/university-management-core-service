import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseValidation } from './course.validations';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(CourseValidation.updateCourseZodSchema),
  CourseController.updateCourse
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  CourseController.deleteCourse
);
router.get('/', CourseController.getAllCourses);

router.get('/:id', CourseController.getSingleCourse);

router.post(
  '/create-course',
  // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(CourseValidation.createCourseZodSchema),
  CourseController.createCourse
);

router.post(
  '/:id/assign-faculties',
  // validateRequest(CourseValidation.assignOrRemoveFaculties),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.assignFaculties
);

router.delete(
  '/:id/remove-faculties',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  // validateRequest(CourseValidation.assignOrRemoveFaculties),
  CourseController.removeFaculties
);
export const CourseRoutes = router;
