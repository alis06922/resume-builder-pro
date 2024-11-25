import botIcon from '../assets/ai-bot.svg'
import searchIcon from '../assets/search.svg'
import documentIcon from '../assets/document.svg'
import customStyleIcon from '../assets/Vector.svg'
import how1 from '../assets/how-1.svg'
import how2 from '../assets/how-2.svg'
import how3 from '../assets/how-3.svg'
import how4 from '../assets/how-4.svg'
import fbIcon from '../assets/fb.svg'
import twitterIcon from '../assets/twitter.svg'
import linkedInIcon from '../assets/linkedin.svg'
import Header from '../components/Header'
import Review from '../components/Reviews'


const HomePage = () => {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            {/* Hero Section */}
            <Header />

            {/* Features Section */}
            <section id='whyus' className="px-6 py-16">
                <h2 className="text-3xl font-light text-center mb-6">Why Choose Us?</h2>
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
                <h2 className="text-3xl font-light text-center mb-6">How It Works</h2>
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
            <Review />


            {/* Footer */}
            <footer className="py-6 text-center bg-gray-100">
                <p className="flex justify-center items-center space-x-4 mb-4">
                    <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
                    <img src={fbIcon} alt="Facebook" className="w-6 h-6" />
                    <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
                </p>
                <p className="text-sm">
                    <a href="#" className="text-[#FF735C] hover:underline">
                        About Us
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-[#FF735C] hover:underline">
                        Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-[#FF735C] hover:underline">
                        Terms of Service
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-[#FF735C] hover:underline">
                        Contact
                    </a>
                </p>
                <p className="text-sm mt-2">© 2024 ResumeBuilderPro. All Rights Reserved.</p>
            </footer>
        </div >
    );
};

export default HomePage;
