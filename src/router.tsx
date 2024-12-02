import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import SideBarPage from "./pages/SideBarPage";
import DashboardPage from "./pages/DashboardPage";

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
        element: <SideBarPage />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <DashboardPage /> }
        ]
    }
])

export default router
