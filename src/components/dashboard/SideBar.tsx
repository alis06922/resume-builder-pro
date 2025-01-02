import { LayoutDashboard, BadgePlus, History, Settings, HelpCircle, X } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { Link, useLocation } from 'react-router-dom';

export const DashboardSideBar = () => {
    const { isOpen, toggle } = useSidebar();
    const location = useLocation();

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={toggle}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed top-0 left-0 z-50 w-64 h-screen bg-gray-50 border-r border-gray-200 p-6
                flex flex-col
                transform transition-transform duration-200 ease-in-out lg:relative lg:transform-none
                ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <Link to="/">
                            <h1 className="text-xl font-bold text-primary">ResumeBuilderPro</h1>
                        </Link>
                    </div>
                    <button
                        onClick={toggle}
                        className="lg:hidden"
                    >
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                <nav className="space-y-2 flex-1">
                    <Link to="/dashboard/" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === "/dashboard/"
                        ? "bg-primary-50 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                        }`}>
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </Link>

                    <Link to="/dashboard/resume/create/" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === "/dashboard/resume/create/"
                        ? "bg-primary-50 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                        }`}>
                        <BadgePlus className="w-5 h-5" />
                        <span>Create Resume</span>
                    </Link>

                    <Link to="/dashboard/history/" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === "/dashboard/history/"
                        ? "bg-primary-50 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                        }`}>
                        <History className="w-5 h-5" />
                        <span>History</span>
                    </Link>

                    {/* <Link to="/dashboard/profile/" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === "/dashboard/profile/"
                        ? "bg-primary-50 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                        }`}>
                        <UserCircle className="w-5 h-5" />
                        <span>Profile</span>
                    </Link> */}

                    <Link to="/dashboard/settings/" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === "/dashboard/settings/"
                        ? "bg-primary-50 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                        }`}>
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </Link>

                    <Link to="/dashboard/help/" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${location.pathname === "/dashboard/help/"
                        ? "bg-primary-50 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                        }`}>
                        <HelpCircle className="w-5 h-5" />
                        <span>Help</span>
                    </Link>
                </nav>

                {/* Sticky Bottom Help Section */}
                {/* <div className="mt-auto">
                    <div className="p-4 bg-primary-50 rounded-lg">
                        <p className="text-sm text-primary">
                            Need help? Check our documentation or contact support.
                        </p>
                    </div>
                </div> */}
            </div>
        </>
    );
};
