import fbIcon from '../assets/fb.svg'
import linkedInIcon from '../assets/linkedin.svg'
import twitterIcon from '../assets/twitter.svg'

function Footer() {
    return (
        <><footer className="px-6 py-6 text-center bg-gray-100">
            <p className="flex justify-center items-center space-x-4 mb-4">
                <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
                <img src={fbIcon} alt="Facebook" className="w-6 h-6" />
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </p>
            <p className="text-sm">
                <a href="#" className="text-primary hover:underline">
                    About Us
                </a>{" "}
                |{" "}
                <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="text-primary hover:underline">
                    Terms of Service
                </a>{" "}
                |{" "}
                <a href="#" className="text-primary hover:underline">
                    Contact
                </a>
            </p>
            <p className="text-sm mt-2">© 2024 ResumeBuilderPro. All Rights Reserved.</p>
        </footer></>
    )
}

export default Footer