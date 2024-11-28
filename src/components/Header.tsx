import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

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
                    <Logo />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="font-medium text-gray-600 hover:text-primary">
                        Home
                    </a>
                    <a href="#whyus" className="font-medium text-gray-600 hover:text-primary">
                        Why Us
                    </a>
                    <a href="#howitworks" className="font-medium text-gray-600 hover:text-primary">
                        How It Works
                    </a>
                    <a href="#reviews" className="font-medium text-gray-600 hover:text-primary">
                        Reviews
                    </a>
                    <Link to="/login/" className="font-medium text-primary">
                        My Account
                    </Link>
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
                        className="block px-6 py-2 text-gray-800 hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#whyus"
                        className="block px-6 py-2 text-gray-800 hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                    >
                        Why Us
                    </a>
                    <a
                        href="#howitworks"
                        className="block px-6 py-2 text-gray-800 hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                    >
                        How It Works
                    </a>
                    <a
                        href="#reviews"
                        className="block px-6 py-2 text-gray-800 hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                    >
                        Reviews
                    </a>
                    <a
                        href="#account"
                        className="block px-6 py-2 text-primary "
                        onClick={() => setMenuOpen(false)}
                    >
                        My Account
                    </a>
                </div>
            )}

        </header>
    );
};

export default Header;
