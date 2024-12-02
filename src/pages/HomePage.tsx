import { Link } from 'react-router-dom'
import botIcon from '../assets/ai-bot.svg'
import documentIcon from '../assets/document.svg'
import backgroundHomeImage from "../assets/home-main.svg"
import how1 from '../assets/how-1.svg'
import how2 from '../assets/how-2.svg'
import how3 from '../assets/how-3.svg'
import how4 from '../assets/how-4.svg'
import searchIcon from '../assets/search.svg'
import customStyleIcon from '../assets/vector.svg'
import Testimonials from '../components/Rveiews'


const HomePage = () => {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans">

            {/* Content Section */}
            <div id="home" className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-1 mt-20">
                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left">
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-600">
                        Build Resumes That Land Jobs with{" "}<span className="text-primary md:text-5xl">AI-Powered</span> Precision
                    </h2>
                    <p className="text-base mt-2 my-4 text-gray-600">
                        Create ATS-friendly, customizable resumes tailored to your dream
                        job—all in minutes.
                    </p>
                    <Link to="/signup/" className="mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg">
                        Get Started for Free Today!
                    </Link>
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
            {/* Features Section */}
            <section id='whyus' className="px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-4xl font-bold mb-5 text-gray-600">
                        Why Choose Us?
                    </h2>
                </div>
                {/* <h2 className="text-6xl font-bold text-center mb-5 text-gray-600">Why Choose Us?</h2> */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex items-start space-x-4">
                        <span className="bg-gray-100 rounded p-4 items-center justify-center">
                            <img src={botIcon} className="h-10 w-16 text-gray-700" ></img>
                        </span>
                        <div>
                            <h3 className="font-semibold text-base leading-8">AI Resume Builder</h3>
                            <p className="text-sm text-gray-600">Tailored resume creation using AI to match your job description and profile.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <span className="bg-gray-100 rounded p-4 items-center justify-center">
                            <img src={documentIcon} className="h-8 w-16 text-gray-700" ></img>
                        </span>
                        <div>
                            <h3 className="font-semibold text-base leading-8">ATS-Friendly Templates</h3>
                            <p className="text-sm text-gray-600">Professionally designed templates that pass applicant tracking systems.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <span className="bg-gray-100 rounded p-4 items-center justify-center">
                            <img src={searchIcon} className="h-8 w-14 text-gray-700" ></img>
                        </span>
                        <div>
                            <h3 className="font-semibold text-base leading-8">Job Description Matching</h3>
                            <p className="text-sm text-gray-600">Smart keyword integration based on the job description.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <span className="bg-gray-100  rounded p-4 items-center justify-center">
                            <img src={customStyleIcon} className="h-10 w-16 text-gray-700" ></img>
                        </span>
                        <div>
                            <h3 className="font-semibold text-base leading-8">Customizable Styles</h3>
                            <p className="text-sm text-gray-600">Choose from multiple styles and formats to match your preferences.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* How It Works Section */}
            <section id='howitworks' className="px-6 py-16 bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-4xl font-bold mb-5 text-gray-600">
                        How It Works
                    </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={how1}
                            alt="Sign Up"
                            className="mb-4 w-56 h-56"
                        />
                        <h3 className="font-semibold text-base">Sign Up</h3>
                        <p className="text-sm text-gray-600">Create an account to get started.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={how2}
                            alt="Add Profile"
                            className="mb-4 w-56 h-56"
                        />
                        <h3 className="font-semibold text-base">Add Profile</h3>
                        <p className="text-sm text-gray-600">Fill in details or upload your resume.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={how3}
                            alt="Provide Job Description"
                            className="mb-4 w-56 h-56"
                        />
                        <h3 className="font-semibold text-base">Provide Job Description</h3>
                        <p className="text-sm text-gray-600">Let our system tailor your resume for the job.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={how4}
                            alt="Generate Resume"
                            className="mb-4 w-56 h-56"
                        />
                        <h3 className="font-semibold text-base">Generate Resume</h3>
                        <p className="text-sm text-gray-600">Get a professional resume in seconds.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />
        </div >
    );
};

export default HomePage;
