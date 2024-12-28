import { Resume } from '../types/resume';

// Simulated API call to fetch resumes
export const getResumes = async (page: number): Promise<Resume[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate paginated data
  const mockResumes: Resume[] = Array.from({ length: 10 }, (_, i) => ({
    id: `${page}-${i}`,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    createdAt: new Date(Date.now() - i * 86400000).toISOString(),
    tags: ['Professional', 'Software Engineer'],
  }));

  // Simulate end of data after 3 pages
  return page <= 3 ? mockResumes : [];
};