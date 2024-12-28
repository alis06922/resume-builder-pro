import { useState } from 'react';

type Experience = {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
};

type ExperienceFormProps = {
  onNext: () => void;
  onBack: () => void;
};

export const ExperienceForm = ({ onNext, onBack }: ExperienceFormProps) => {
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: '1', jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '' }
  ]);

  const addExperience = () => {
    setExperiences(prev => [...prev, {
      id: Math.random().toString(),
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      responsibilities: ''
    }]);
  };

  const removeExperience = (id: string) => {
    if (experiences.length > 1) {
      setExperiences(prev => prev.filter(exp => exp.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
        <p className="text-gray-600 mt-1">Tell us about your work history</p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="p-6 bg-white border-2 border-primary-100 rounded-xl space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">Experience {index + 1}</h3>
              {experiences.length > 1 && (
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="text-red-500 hover:text-red-600 text-sm"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`jobTitle-${exp.id}`} className="block text-sm font-medium text-gray-700">Job Title</label>
                <input
                  type="text"
                  id={`jobTitle-${exp.id}`}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  placeholder="Senior Software Engineer"
                />
              </div>
              <div>
                <label htmlFor={`company-${exp.id}`} className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  id={`company-${exp.id}`}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  placeholder="Tech Company Inc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`startDate-${exp.id}`} className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  id={`startDate-${exp.id}`}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor={`endDate-${exp.id}`} className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  id={`endDate-${exp.id}`}
                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`responsibilities-${exp.id}`} className="block text-sm font-medium text-gray-700">Key Responsibilities</label>
              <textarea
                id={`responsibilities-${exp.id}`}
                rows={4}
                className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                placeholder="Describe your key responsibilities and achievements..."
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addExperience}
        className="w-full py-3 border-2 border-dashed border-primary-300 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors"
      >
        + Add Another Experience
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