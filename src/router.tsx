import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import DashLayout from "./pages/dashboard/Layout";
import { HistoryPage } from "./pages/dashboard/HistoryPage";
import CreateResumePage from "./pages/dashboard/CreateResumePage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";

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
        path: '/dashboard/',
        element: <DashLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <DashboardPage /> },
            { path: 'resume/create/', element: <CreateResumePage /> },
            { path: 'history/', element: <HistoryPage /> },
        ]
    }
])

export default router
