
import { RecentHistory } from '../../components/dashboard/RecentHistory';
import { UploadForm } from '../../components/dashboard/UploadForm';
import { useResumes } from '../../hooks/useResumes';

export const DashboardPage = () => {
    const { resumes } = useResumes();
    const recentResumes = resumes.slice(0, 4);

    return (
        <div className="flex-1 p-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <UploadForm />
                <RecentHistory resumes={recentResumes} />
            </div>
        </div>
    );
};