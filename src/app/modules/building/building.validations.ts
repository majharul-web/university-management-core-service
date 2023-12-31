import { z } from 'zod';

const createBuildingZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Building title is required',
    }),
  }),
});

const updateBuildingZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});

export const BuildingValidation = {
  createBuildingZodSchema,
  updateBuildingZodSchema,
};
