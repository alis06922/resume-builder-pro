import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import DashLayout from "./pages/dashboard/Layout";
import Dashboard from "./pages/dashboard/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'login/', element: <LoginPage /> },
            { path: 'signup/', element: <SignUpPage /> },
            { path: 'password/reset/', element: <ForgotPasswordPage /> }
        ]
    },
    {
        path: '/dashbaord/',
        element: <DashLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Dashboard /> }
        ]
    }
])

export default router
