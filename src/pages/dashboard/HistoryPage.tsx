import { HistoryList } from '../../components/history/HistoryList';
import { FileText } from 'lucide-react';

export const HistoryPage = () => {
    return (
        <div className="flex-1 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-6 h-6 text-primary" />
                    <h1 className="text-2xl font-bold text-gray-800">Resume History</h1>
                </div>
                <HistoryList />
            </div>
        </div>
    );
};