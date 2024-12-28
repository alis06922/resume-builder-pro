export type Resume = {
  id: string;
  title?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location?: string;
  createdAt: string;
  tags?: string[];
};



export type ResumeSection = 'personal' | 'experience' | 'education' | 'skills' | 'additional';

export type ResumeData = {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    location?: string;
    summary?: string;
  };
  experience?: {
    id: string;
    jobTitle: string;
    company: string;
    startDate: string;
    endDate?: string;
    responsibilities: string;
  }[];
  education?: {
    id: string;
    degree: string;
    institution: string;
    graduationYear: string;
    gpa?: string;
    achievements?: string;
  }[];
  skills?: {
    technical: string[];
    soft: string[];
    certifications?: string[];
  };
  additionalInfo?: {
    languages: {
      name: string;
      proficiency: string;
    }[];
    hobbies?: string;
    other?: string;
  };
};