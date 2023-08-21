import { IPaginationOptions } from '../../../interfaces/pagination';
import { IAcademicFacultyFilters } from './academicFaculty.interface';
import { AcademicFaculty, Prisma } from '@prisma/client';
import { academicFacultySearchableFields } from './academicFaculty.constant';
import { IGenericResponse } from '../../../interfaces/common';
import prisma from '../../../shared/prisma';
import { paginationHelpers } from '../../../helpers/paginationHelper';

const createAcademicFaculty = async (
  payload: AcademicFaculty
): Promise<AcademicFaculty | null> => {
  const result = await prisma.academicFaculty.create({ data: payload });
  return result;
};

const getAllAcademicFaculties = async (
  filterOptions: IAcademicFacultyFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<AcademicFaculty[] | null>> => {
  const { searchTerm, ...filtersData } = filterOptions;

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: academicFacultySearchableFields.map(field => ({
        [field]: { contains: searchTerm, mode: 'insensitive' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      AND: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions: Prisma.AcademicFacultyWhereInput = andConditions.length
    ? { AND: andConditions }
    : {};

  const result = await prisma.academicFaculty.findMany({
    where: whereConditions,
    skip: skip,
    take: limit,
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });

  const total = await prisma.academicFaculty.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleAcademicFaculty = async (
  id: string
): Promise<AcademicFaculty | null> => {
  const result = await prisma.academicFaculty.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateAcademicFaculty = async (
  id: string,
  payload: Partial<AcademicFaculty>
): Promise<AcademicFaculty | null> => {
  const result = await prisma.academicFaculty.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const deleteAcademicFaculty = async (
  id: string
): Promise<AcademicFaculty | null> => {
  const result = await prisma.academicFaculty.delete({
    where: {
      id,
    },
  });
  return result;
};

export const AcademicFacultyService = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty,
};
