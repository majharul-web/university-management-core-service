import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OfferedCourseController } from './offeredCourse.controller';
import { OfferedCourseValidation } from './offeredCourse.validations';

const router = express.Router();

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(OfferedCourseValidation.updateOfferedCourseZodSchema),
  OfferedCourseController.updateOfferedCourse
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseController.deleteOfferedCourse
);
router.get('/', OfferedCourseController.getAllOfferedCourse);

router.get('/:id', OfferedCourseController.getSingleOfferedCourse);

router.post(
  '/create-course',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(OfferedCourseValidation.createOfferedCourseZodSchema),
  OfferedCourseController.createOfferedCourse
);

export const OfferedCourseRoutes = router;
