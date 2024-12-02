import { FileClock, LayoutDashboard, LayoutTemplate, LifeBuoy, Settings, UserCircle } from "lucide-react"
import { Outlet } from 'react-router-dom'
import Sidebar, { SidebarItem } from '../components/Sidebar'


function SideBarPage() {
    return (
        <div className="flex">
            <main className='app'>
                <Sidebar>
                    <SidebarItem icon={<LayoutDashboard size={20} />} text='Dashbaord' alert />
                    {/* <SidebarItem icon={<BadgePlus size={20} />} text='Create New' /> */}
                    <SidebarItem icon={<LayoutTemplate size={20} />} text='Templates' />
                    <SidebarItem icon={<FileClock size={20} />} text='History' />
                    <hr className='my-3' />
                    <SidebarItem icon={<UserCircle size={20} />} text='Profile' />
                    <SidebarItem icon={<Settings size={20} />} text='Settings' />
                    <SidebarItem icon={<LifeBuoy size={20} />} text='Help' />

                </Sidebar>
            </main>
            <Outlet />
        </div>
    )
}

export default SideBarPage