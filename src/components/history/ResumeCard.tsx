import { Calendar, Download, Eye, Trash2 } from 'lucide-react';
import { Resume } from '../../types/resume';
import { formatDate } from '../../utils/dateUtils';

type ResumeCardProps = {
    resume: Resume;
};

export const ResumeCard = ({ resume }: ResumeCardProps) => {
    return (
        <div className="bg-white border-2 border-primary-100 rounded-xl p-6 hover:border-primary-200 transition-colors">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {resume.title || `${resume.firstName} ${resume.lastName}'s Resume`}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>Created on {formatDate(resume.createdAt)}</span>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-primary rounded-lg hover:bg-indigo-50">
                        <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary rounded-lg hover:bg-indigo-50">
                        <Download className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {resume.tags?.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-primary-50 text-primary text-sm rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};