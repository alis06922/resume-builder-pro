import { Sparkles, UserCircle, Briefcase, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export const DashboardProfileEdit = () => {
    return (
        <div className="flex-1 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-gray-800">Getting Started</h2>
                    </div>
                    <p className="text-gray-600">
                        Complete these steps to create your professional resume. Each section helps build a comprehensive profile.
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Personal Information Section */}
                    <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 hover:border-indigo-200 transition-colors">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <UserCircle className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Personal Information</h3>
                                    <p className="text-gray-600 text-sm mb-3">Start with your basic details - name, contact info, and professional summary</p>
                                    <div className="flex gap-2 text-sm">
                                        <span className="px-2 py-1 bg-indigo-50 text-primary rounded">Step 1/5</span>
                                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded flex items-center gap-1">
                                            <CheckCircle2 className="w-4 h-4" /> Required
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors">
                                Start
                            </button>
                        </div>
                    </div>

                    {/* Work Experience Section */}
                    <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 hover:border-indigo-200 transition-colors">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Work Experience</h3>
                                    <p className="text-gray-600 text-sm mb-3">Add your work history, achievements, and responsibilities</p>
                                    <div className="flex gap-2 text-sm">
                                        <span className="px-2 py-1 bg-indigo-50 text-primary rounded">Step 2/5</span>
                                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded flex items-center gap-1">
                                            <CheckCircle2 className="w-4 h-4" /> Required
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed">
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 hover:border-indigo-200 transition-colors">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <GraduationCap className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Education</h3>
                                    <p className="text-gray-600 text-sm mb-3">Include your educational background and qualifications</p>
                                    <div className="flex gap-2 text-sm">
                                        <span className="px-2 py-1 bg-indigo-50 text-primary rounded">Step 3/5</span>
                                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded flex items-center gap-1">
                                            <CheckCircle2 className="w-4 h-4" /> Required
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed">
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 hover:border-indigo-200 transition-colors">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Skills & Expertise</h3>
                                    <p className="text-gray-600 text-sm mb-3">List your technical skills, soft skills, and certifications</p>
                                    <div className="flex gap-2 text-sm">
                                        <span className="px-2 py-1 bg-indigo-50 text-primary rounded">Step 4/5</span>
                                        <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded">Optional</span>
                                    </div>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed">
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 hover:border-indigo-200 transition-colors">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Additional Information</h3>
                                    <p className="text-gray-600 text-sm mb-3">Add languages, hobbies, or other relevant information</p>
                                    <div className="flex gap-2 text-sm">
                                        <span className="px-2 py-1 bg-indigo-50 text-primary rounded">Step 5/5</span>
                                        <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded">Optional</span>
                                    </div>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed">
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                    <p className="text-sm text-primary">
                        <strong>Pro Tip:</strong> Complete all required sections to unlock the resume generation feature.
                        The more information you provide, the better your resume will be!
                    </p>
                </div>
            </div>
        </div>
    );
};
