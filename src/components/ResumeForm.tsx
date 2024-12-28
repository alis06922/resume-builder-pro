import { useState } from 'react';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { EducationForm } from './forms/EducationForm';
import { SkillsForm } from './forms/SkillsForm';
import { AdditionalInfoForm } from './forms/AdditionalInfoForm';
import { CongratulationsStep } from './forms/CongratulationsStep';

type ResumeFormProps = {
  onClose: () => void;
};

export const ResumeForm = ({ onClose }: ResumeFormProps) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleComplete = () => {
    // Handle form submission here
    console.log('Form completed');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-medium text-gray-500">
              Step {step} of 6
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            />
          </div>
        </div>

        {step === 1 && <PersonalInfoForm onNext={handleNext} />}
        {step === 2 && <ExperienceForm onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <EducationForm onNext={handleNext} onBack={handleBack} />}
        {step === 4 && <SkillsForm onNext={handleNext} onBack={handleBack} />}
        {step === 5 && <AdditionalInfoForm onNext={handleNext} onBack={handleBack} />}
        {step === 6 && <CongratulationsStep onComplete={handleComplete} onBack={handleBack} />}
      </div>
    </div>
  );
};