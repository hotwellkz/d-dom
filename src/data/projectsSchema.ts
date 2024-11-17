import { z } from 'zod';

// Базовая схема проекта
export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.string(),
  area: z.string(),
  length: z.string(),
  width: z.string(),
  floors: z.number(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  garages: z.number(),
  location: z.string(),
  coordinates: z.tuple([z.number(), z.number()]).optional(),
  image: z.string().url(),
  category: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  gallery: z.array(z.string().url()),
  typeId: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

export type Project = z.infer<typeof projectSchema>;

// Функция для валидации проекта
export function validateProject(project: unknown): Project {
  return projectSchema.parse(project);
}

// Функция для валидации массива проектов
export function validateProjects(projects: unknown[]): Project[] {
  return z.array(projectSchema).parse(projects);
}