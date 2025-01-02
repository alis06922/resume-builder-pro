import { ArrowRight } from 'lucide-react';
import { ResumeCard } from '../history/ResumeCard';
import { Resume } from '../../types/resume';
import { Link } from 'react-router-dom';

type RecentHistoryProps = {
  resumes: Resume[];
};

export const RecentHistory = ({ resumes }: RecentHistoryProps) => {

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Recent Optimizations</h2>
        <Link
          to="/dashboard/history/"
          className="text-primary-500 hover:text-primary-600 flex items-center gap-1"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>

      {resumes.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No recent optimizations found
        </div>
      )}
    </div>
  );
};