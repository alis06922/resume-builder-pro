import { useState } from 'react';
import { Plus, X } from 'lucide-react';

type AdditionalInfoFormProps = {
  onNext: () => void;
  onBack: () => void;
};

type Language = {
  id: string;
  name: string;
  proficiency: string;
};

export const AdditionalInfoForm = ({ onNext, onBack }: AdditionalInfoFormProps) => {
  const [languages, setLanguages] = useState<Language[]>([
    { id: '1', name: '', proficiency: 'Beginner' }
  ]);

  const addLanguage = () => {
    setLanguages(prev => [...prev, {
      id: Math.random().toString(),
      name: '',
      proficiency: 'Beginner'
    }]);
  };

  const removeLanguage = (id: string) => {
    if (languages.length > 1) {
      setLanguages(prev => prev.filter(lang => lang.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Additional Information</h2>
        <p className="text-gray-600 mt-1">Add languages, hobbies, or other relevant information</p>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-white border-2 border-primary-100 rounded-xl space-y-6">
          <h3 className="text-lg font-semibold text-gray-700">Languages</h3>

          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.id} className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Language name"
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none  focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="flex-1">
                  <select
                    className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Native">Native</option>
                  </select>
                </div>
                {languages.length > 1 && (
                  <button
                    onClick={() => removeLanguage(lang.id)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={addLanguage}
            className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
          >
            <Plus className="w-4 h-4" /> Add Language
          </button>
        </div>

        <div className="p-6 bg-white border-2 border-primary-100 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Hobbies & Interests</h3>
          <textarea
            rows={4}
            className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="Share your hobbies and interests..."
          />
        </div>

        <div className="p-6 bg-white border-2 border-primary-100 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Additional Information</h3>
          <textarea
            rows={4}
            className="w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="Any other information you'd like to add..."
          />
        </div>
      </div>

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
          Finish
        </button>
      </div>
    </div>
  );
};