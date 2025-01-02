import { useState, useEffect } from 'react';
import { Resume } from '../types/resume';
import { getResumes } from '../utils/resumeService';

export const useResumes = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadResumes = async () => {
      try {
        const data = await getResumes(1);
        setResumes(data);
      } catch (error) {
        console.error('Failed to load resumes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadResumes();
  }, []);

  return { resumes, isLoading };
};