
import UserForm from "../components/UserForm";

const DashboardPage = () => {
    return (
        <>
            <div className="flex-1 p-6">
                <h1 className="text-gray-600 text-2xl font-bold mb-6">Dashboard</h1>
                <div className="mb-6">
                    <UserForm />
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Favourite Clients</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded shadow">TechInnovate Solutions</div>
                        <div className="bg-gray-100 p-4 rounded shadow">EcoFusion Innovations</div>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">Recently Viewed Projects</h2>
                    <div className="bg-gray-100 p-4 rounded shadow">
                        <ul>
                            <li className="flex justify-between py-2 border-b">
                                <span>Project A</span>
                                <span>Last Modified: Today</span>
                            </li>
                            <li className="flex justify-between py-2 border-b">
                                <span>Project B</span>
                                <span>Last Modified: Yesterday</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
