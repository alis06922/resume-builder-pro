import React from "react";

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Leslie Alexander",
            username: "@lesliealexander",
            image: "https://i.pravatar.cc/100?img=1",
            text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        },
        {
            name: "Brenna Goyette",
            username: "@brennagoyette",
            image: "https://i.pravatar.cc/100?img=2",
            text: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh.",
        },
        {
            name: "Leonard Krasner",
            username: "@leonardkrasner",
            image: "https://i.pravatar.cc/100?img=3",
            text: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatum minus harum.",
        },
        {
            name: "Michael Foster",
            username: "@michaelfoster",
            image: "https://i.pravatar.cc/100?img=4",
            text: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
        },
        {
            name: "Lindsay Walton",
            username: "@lindsaywalton",
            image: "https://i.pravatar.cc/100?img=5",
            text: "Aut reprehenderit voluptatum eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        },
        {
            name: "Emily Selman",
            username: "@emilyselman",
            image: "https://i.pravatar.cc/100?img=6",
            text: "Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et.",
        },
    ];

    return (
        <div id="reviews" className="min-w-screen min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white flex items-center justify-center py-16 px-6">
            <div className="w-full max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-4xl font-bold mb-5 text-gray-600">
                        What people are saying.
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">
                        We have worked with thousands of amazing people
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? "lg:mt-8" : "lg:mt-0"
                                }`}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-purple-200"
                                />
                                <div className="ml-4">
                                    <h5 className="text-sm font-bold text-gray-800">
                                        {testimonial.name}
                                    </h5>
                                    <p className="text-xs text-gray-500">{testimonial.username}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
