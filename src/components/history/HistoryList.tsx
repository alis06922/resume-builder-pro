import { useEffect, useRef, useState } from 'react';
import { ResumeCard } from './ResumeCard';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { getResumes } from '../../utils/resumeService';
import { Resume } from '../../types/resume';

export const HistoryList = () => {
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const pageRef = useRef(1);

    const loadMore = async () => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
        try {
            const newResumes = await getResumes(pageRef.current);
            if (newResumes.length < 10) {
                setHasMore(false);
            }
            setResumes(prev => [...prev, ...newResumes]);
            pageRef.current += 1;
        } catch (error) {
            console.error('Failed to load resumes:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const { observerRef } = useInfiniteScroll(loadMore);

    useEffect(() => {
        loadMore();
    }, []);

    return (
        <div className="space-y-4">
            {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
            ))}

            <div ref={observerRef} className="h-10 flex items-center justify-center">
                {isLoading && (
                    <div className="animate-pulse text-gray-500">Loading more resumes...</div>
                )}
            </div>

            {!hasMore && resumes.length > 0 && (
                <div className="text-center text-gray-500 py-4">
                    No more resumes to load
                </div>
            )}

            {!isLoading && resumes.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                    No resumes found. Create your first resume!
                </div>
            )}
        </div>
    );
};