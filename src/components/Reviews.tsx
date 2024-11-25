import React, { useEffect, useRef } from 'react';

interface Review {
    id: number;
    name: string;
    img: string;
    text: string;
}

const ReviewsSection: React.FC = () => {
    const reviews: Review[] = [
        {
            id: 1,
            name: 'John Doe',
            img: 'https://randomuser.me/api/portraits/women/12.jpg',
            text: 'This tool helped me land my dream job!',
        },
        {
            id: 2,
            name: 'Jane Smith',
            img: 'https://randomuser.me/api/portraits/men/13.jpg',
            text: 'The AI resume builder is a game changer!',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            img: 'https://randomuser.me/api/portraits/men/14.jpg',
            text: 'Highly recommended for anyone job hunting.',
        },
        {
            id: 4,
            name: 'Michael Brown',
            img: 'https://randomuser.me/api/portraits/women/15.jpg',
            text: 'The process was seamless and effective!',
        },
        {
            id: 5,
            name: 'David Lee',
            img: 'https://randomuser.me/api/portraits/women/16.jpg',
            text: 'Amazing experience using this tool.',
        },
        {
            id: 6,
            name: 'David Lee',
            img: 'https://randomuser.me/api/portraits/men/17.jpg',
            text: 'Amazing experience using this tool.',
        },
        {
            id: 7,
            name: 'David Lee',
            img: 'https://randomuser.me/api/portraits/women/18.jpg',
            text: 'Amazing experience using this tool.',
        },
        {
            id: 8,
            name: 'David Lee',
            img: 'https://randomuser.me/api/portraits/men/19.jpg',
            text: 'Amazing experience using this tool.',
        },
    ];

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollInterval: number | undefined;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (scrollContainer) {
                    // Scroll forward
                    scrollContainer.scrollLeft += 2;

                    // Reset scroll to the start for infinite scroll effect
                    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                        scrollContainer.scrollLeft = 0;
                    }
                }
            }, 10);
        };

        const stopAutoScroll = () => {
            if (scrollInterval) clearInterval(scrollInterval);
        };

        // Start scrolling on mount
        startAutoScroll();

        // Stop scrolling on hover
        const handleMouseEnter = () => stopAutoScroll();
        const handleMouseLeave = () => startAutoScroll();

        if (scrollContainer) {
            scrollContainer.addEventListener('mouseenter', handleMouseEnter);
            scrollContainer.addEventListener('mouseleave', handleMouseLeave);
        }

        // Cleanup event listeners on unmount
        return () => {
            stopAutoScroll();
            if (scrollContainer) {
                scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
                scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div id='reviews' className="w-full px-6 py-16 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-light text-center mb-6">What Our Users Say</h2>
            {/* Scrollable Section */}
            <div
                ref={scrollContainerRef}
                className="flex space-x-4 overflow-x-auto scrollbar-hide -mx-4 px-4"
                style={{ scrollBehavior: 'smooth' }} // Smooth scrolling behavior
            >
                {/* Duplicate reviews to create a seamless infinite scroll */}
                {[...reviews, ...reviews].map((review, index) => (
                    <div
                        key={`${review.id}-${index}`}
                        className="min-w-[220px] bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
                    >
                        <img
                            src={review.img}
                            alt={review.name}
                            className="h-36 w-36 rounded-lg object-cover mb-4"
                        />
                        <h3 className="font-semibold text-base text-gray-800">{review.name}</h3>
                        <p className="text-sm text-gray-600 text-center">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;
