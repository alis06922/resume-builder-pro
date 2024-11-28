import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";

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
        element: <SignUp />
    }
])

export default router
