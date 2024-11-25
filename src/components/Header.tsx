import React, { useState, useEffect } from "react";
import backgroundHomeImage from "../assets/home-main.svg";

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Handle the scroll event to add/remove the border
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // Attach the scroll event listener on mount and clean up on unmount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`relative bg-white ${scrolled ? "border-b border-gray-300" : ""
                } transition-all`}
        >
            {/* Top Navigation Bar */}
            <nav className="flex justify-between items-center py-6 px-4 md:px-12 bg-white fixed top-0 left-0 w-full z-10">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold text-[#FF735C]">ResumeBuilderPro</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-base text-gray-800 hover:text-[#FF735C]">
                        Home
                    </a>
                    <a href="#whyus" className="text-base text-gray-800 hover:text-[#FF735C]">
                        Why Us
                    </a>
                    <a href="#howitworks" className="text-base text-gray-800 hover:text-[#FF735C]">
                        How It Works
                    </a>
                    <a href="#reviews" className="text-base text-gray-800 hover:text-[#FF735C]">
                        Reviews
                    </a>
                    <a href="#account" className="text-base text-[#FF735C]">
                        My Account
                    </a>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden absolute left-0 w-full bg-white shadow-md py-4 z-20">
                    <a
                        href="#home"
                        className="block px-6 py-2 text-gray-800 hover:text-[#FF735C]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#whyus"
                        className="block px-6 py-2 text-gray-800 hover:text-[#FF735C]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Why Us
                    </a>
                    <a
                        href="#howitworks"
                        className="block px-6 py-2 text-gray-800 hover:text-[#FF735C]"
                        onClick={() => setMenuOpen(false)}
                    >
                        How It Works
                    </a>
                    <a
                        href="#reviews"
                        className="block px-6 py-2 text-gray-800 hover:text-[#FF735C]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Reviews
                    </a>
                    <a
                        href="#account"
                        className="block px-6 py-2 text-[#FF735C]"
                        onClick={() => setMenuOpen(false)}
                    >
                        My Account
                    </a>
                </div>
            )}

            {/* Content Section */}
            <div id="home" className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-1 mt-20">
                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left">
                    <p className="text-3xl md:text-4xl text-gray-800">
                        Build Resumes That Land Jobs with{" "}
                        <span className="text-[#FF735C]">AI-Powered</span> Precision
                    </p>
                    <p className="text-base mt-2 text-gray-600">
                        Create ATS-friendly, customizable resumes tailored to your dream
                        job—all in minutes.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-[#FF735C] text-white font-medium rounded">
                        Get Started for Free Today!
                    </button>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <img
                        src={backgroundHomeImage}
                        alt="Resume Builder"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
