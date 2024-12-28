import { PartyPopper } from 'lucide-react';

type CongratulationsStepProps = {
  onComplete: () => void;
  onBack: () => void;
};

export const CongratulationsStep = ({ onComplete, onBack }: CongratulationsStepProps) => {
  return (
    <div className="space-y-8 text-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
          <PartyPopper className="w-8 h-8 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Congratulations!</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          You've successfully completed all steps. Your resume is ready to be generated with your provided information.
        </p>
      </div>

      <div className="p-6 bg-primary-50 rounded-xl">
        <h3 className="font-semibold text-primary-900 mb-2">What's Next?</h3>
        <ul className="text-left text-primary-700 space-y-2">
          <li>• Your resume will be generated with a professional template</li>
          <li>• You can download it in multiple formats (PDF, DOCX)</li>
          <li>• Edit or update your information anytime</li>
        </ul>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onComplete}
          className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
        >
          Generate Resume
        </button>
      </div>
    </div>
  );
};