import { useState } from 'react';

type Education = {
  id: string;
  degree: string;
  institution: string;
  graduationYear: string;
  gpa: string;
  achievements: string;
};

type EducationFormProps = {
  onNext: () => void;
  onBack: () => void;
};

export const EducationForm = ({ onNext, onBack }: EducationFormProps) => {
  const [educations, setEducations] = useState<Education[]>([
    { id: '1', degree: '', institution: '', graduationYear: '', gpa: '', achievements: '' }
  ]);

  const addEducation = () => {
    setEducations(prev => [...prev, {
      id: Math.random().toString(),
      degree: '',
      institution: '',
      graduationYear: '',
      gpa: '',
      achievements: ''
    }]);
  };

  const removeEducation = (id: string) => {
    if (educations.length > 1) {
      setEducations(prev => prev.filter(edu => edu.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Education</h2>
        <p className="text-gray-600 mt-1">Tell us about your educational background</p>
      </div>

      <div className="space-y-8">
        {educations.map((edu, index) => (
          <div key={edu.id} className="p-6 bg-white border-2 border-primary-100 rounded-xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">Education {index + 1}</h3>
              {educations.length > 1 && (
                <button
                  onClick={() => removeEducation(edu.id)}
                  className="text-red-500 hover:text-red-600 text-sm"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`degree-${edu.id}`} className="block text-sm font-medium text-gray-700">Degree</label>
                <input
                  type="text"
                  id={`degree-${edu.id}`}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  placeholder="Bachelor of Science in Computer Science"
                />
              </div>
              <div>
                <label htmlFor={`institution-${edu.id}`} className="block text-sm font-medium text-gray-700">Institution</label>
                <input
                  type="text"
                  id={`institution-${edu.id}`}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  placeholder="University Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`graduationYear-${edu.id}`} className="block text-sm font-medium text-gray-700">Graduation Year</label>
                <input
                  type="number"
                  id={`graduationYear-${edu.id}`}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  placeholder="2023"
                />
              </div>
              <div>
                <label htmlFor={`gpa-${edu.id}`} className="block text-sm font-medium text-gray-700">GPA (Optional)</label>
                <input
                  type="text"
                  id={`gpa-${edu.id}`}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  placeholder="3.8"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`achievements-${edu.id}`} className="block text-sm font-medium text-gray-700">Achievements</label>
              <textarea
                id={`achievements-${edu.id}`}
                rows={4}
                className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                placeholder="List any academic achievements, honors, or relevant coursework..."
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addEducation}
        className="w-full py-3 border-2 border-dashed border-primary-300 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors"
      >
        + Add Another Education
      </button>

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};