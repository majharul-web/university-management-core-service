import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';
import { OfferedCourseSectionValidation } from './offeredCourseSection.validations';

const router = express.Router();

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(
    OfferedCourseSectionValidation.updateOfferedCourseSectionZodSchema
  ),
  OfferedCourseSectionController.updateOfferedCourseSection
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseSectionController.deleteOfferedCourseSection
);
router.get('/', OfferedCourseSectionController.getAllOfferedCourseSection);

router.get(
  '/:id',
  OfferedCourseSectionController.getSingleOfferedCourseSection
);

router.post(
  '/create-section',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(
    OfferedCourseSectionValidation.createOfferedCourseSectionZodSchema
  ),
  OfferedCourseSectionController.createOfferedCourseSection
);

export const OfferedCourseSectionRoutes = router;
