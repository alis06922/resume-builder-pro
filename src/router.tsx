import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login/',
        element: <LoginPage />
    },
    {
        path: '/signup/',
        element: <SignUpPage />
    },
    {
        path: '/password/reset/',
        element: <ForgotPasswordPage />
    }
])

export default router
