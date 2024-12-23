import { DashboardSideBar } from '../../components/dashboard/SideBar';
import { DashboardHeader } from '../../components/dashboard/Header';
import { SidebarProvider } from '../../context/SidebarContext';
import { Outlet } from 'react-router-dom'

function DashLayout() {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-white">
                <DashboardSideBar />
                <div className="flex-1 flex flex-col">
                    <DashboardHeader />
                    <Outlet />
                </div>
            </div>
        </SidebarProvider>
    );
}

export default DashLayout;