import {
  IAcademicSemesterCode,
  IAcademicSemesterMonth,
  IAcademicSemesterTitle,
} from './academicSemester.interface';

export const academicSemesterMonths: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const academicSemesterTitles: IAcademicSemesterTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
];
export const academicSemesterCodes: IAcademicSemesterCode[] = [
  '01',
  '02',
  '03',
];

export const AcademicSemesterTitleCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const academicSemesterSearchableFields: string[] = [
  'title',
  'code',
  'startMonth',
  'endMonth',
];
export const academicSemesterFilterAbleFields: string[] = [
  'searchTerm',
  ...academicSemesterSearchableFields,
];
