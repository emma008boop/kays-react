import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/dashboard/nav/Navbar';
import './DashboardLayout.css';

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            <Navbar />
            <main className="dashboard-main">
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout;