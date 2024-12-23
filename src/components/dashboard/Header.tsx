import { Menu } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { Link } from 'react-router-dom';


export const DashboardHeader = () => {
    const { toggle } = useSidebar();

    return (
        <header className="bg-white border-b border-gray-200 lg:hidden">
            <div className="px-4 py-3">
                <button
                    onClick={toggle}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <div className="flex items-center gap-2">
                        <Menu className="w-6 h-6 text-gray-600" />
                        <Link to="/">
                            <h1 className="text-2xl text-center font-bold text-primary">ResumeBuilderPro</h1>
                        </Link>
                    </div>

                </button>
            </div>
        </header>
    );
};