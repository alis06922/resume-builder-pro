import { useState } from "react";

const steps = [
    { id: 1, title: "Personal Information", description: "Add your personal information" },
    { id: 2, title: "Add your first Project", description: "Some description" },
    { id: 3, title: "Add Content to this Client", description: "Some description" },
    { id: 4, title: "Use Document Editor", description: "Some description" },
];

const UserForm = () => {
    const [currentStep, setCurrentStep] = useState<number | null>(null);

    const openForm = (stepId: number) => {
        setCurrentStep(stepId);
    };

    return (
        <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Getting Started</h2>
            <div>
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`flex items-center justify-between py-2 border-b ${index < 2 ? "text-green-600" : "text-primary"
                            }`}
                    >
                        <div>
                            <h3>{step.title}</h3>
                            <p className="text-sm">{step.description}</p>
                        </div>
                        <button
                            onClick={() => openForm(step.id)}
                            className={`px-4 py-2 rounded ${index < 2 ? "bg-gray-300" : "bg-primary text-white"
                                }`}
                            disabled={index < 2}
                        >
                            Start
                        </button>
                    </div>
                ))}
            </div>

            {/* Show Form */}
            {currentStep && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Step {currentStep} Form</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UserForm;
