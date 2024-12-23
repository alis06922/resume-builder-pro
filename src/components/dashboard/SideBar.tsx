import { LayoutDashboard, History, UserCircle, Settings, HelpCircle, X } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { Link } from 'react-router-dom';

export const DashboardSideBar = () => {
    const { isOpen, toggle } = useSidebar();

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
                    <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-indigo-50 text-primary">
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                        <History className="w-5 h-5" />
                        <span>History</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                        <UserCircle className="w-5 h-5" />
                        <span>Profile</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                    </a>

                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
                        <HelpCircle className="w-5 h-5" />
                        <span>Help</span>
                    </a>
                </nav>

                {/* Sticky Bottom Help Section */}
                {/* <div className="mt-auto">
                    <div className="p-4 bg-indigo-50 rounded-lg">
                        <p className="text-sm text-primary">
                            Need help? Check our documentation or contact support.
                        </p>
                    </div>
                </div> */}
            </div>
        </>
    );
};
