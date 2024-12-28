
type SkillsFormProps = {
  onNext: () => void;
  onBack: () => void;
};

export const SkillsForm = ({ onNext, onBack }: SkillsFormProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Skills & Expertise</h2>
        <p className="text-gray-600 mt-1">List your technical and professional skills</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="technicalSkills" className="block text-sm font-medium text-gray-700">Technical Skills</label>
          <textarea
            id="technicalSkills"
            rows={3}
            className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="e.g., JavaScript, React, Node.js, Python..."
          />
          <p className="mt-1 text-sm text-gray-500">Separate skills with commas</p>
        </div>

        <div>
          <label htmlFor="softSkills" className="block text-sm font-medium text-gray-700">Soft Skills</label>
          <textarea
            id="softSkills"
            rows={3}
            className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="e.g., Leadership, Communication, Problem Solving..."
          />
          <p className="mt-1 text-sm text-gray-500">Separate skills with commas</p>
        </div>

        <div>
          <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">Certifications</label>
          <textarea
            id="certifications"
            rows={3}
            className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="List any relevant certifications..."
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};