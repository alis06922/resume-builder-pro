import { Link } from 'react-router-dom';
import googleIcon from '../assets/icons/google.svg';
import userAddIcon from '../assets/icons/user-add.svg';
import loginBg from '../assets/login-bg.svg';

const SignUpPage = () => {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="mt-12 bg-white sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-base md:text-2xl font-extrabold text-gray-600">
                                Sign Up
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="flex flex-col items-center">
                                    <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#4081EC]  flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full">
                                            <img src={googleIcon} />
                                        </div>
                                        <span className="ml-4 text-white">
                                            Continue with Google
                                        </span>
                                    </button>

                                    {/* <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3  bg-[#171515] flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                        <div className="bg-white p-1 rounded-full">
                                            <img src={githubIcon} />
                                        </div>
                                        <span className="ml-4 text-white">
                                            Sign Up with GitHub
                                        </span>
                                    </button> */}
                                </div>

                                <div className="my-10 border-b text-center">
                                    <div
                                        className="leading-none px-2 inline-block text-xs text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        Or sign up with e-mail
                                    </div>
                                </div>

                                <div className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Email" />
                                    <input
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" placeholder="Password" />

                                    <Link to="/dashbaord/" className="mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <img src={userAddIcon} className="text-white" />
                                        <span className="ml-3">
                                            Sign Up
                                        </span>
                                    </Link>
                                    <p className='mt-6 text-xs text-gray-600 text-center'>
                                        Already have an account? <Link to="/login/" className='border-b border-dotted border-gray-500 text-primary'>Log In</Link>
                                    </p>
                                    <p className="mt-8 text-xs text-gray-600 text-center">
                                        I agree to ResumeBuilderPro {" "}
                                        <a href="#" className="border-b text-primary border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>
                                        {" "} and its {" "}
                                        <a href="#" className="border-b text-primary border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-gradient-to-l from-gray-100 to-white flex-1 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                            <img
                                src={loginBg}
                                alt="Resume Builder"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SignUpPage;
