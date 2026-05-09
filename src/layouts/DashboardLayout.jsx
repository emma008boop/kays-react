import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/footer/Footer';
import Nav from '../components/layout/landing/nav/Nav';

const DashboardLayout = () => {
    return (
        <>
            <Nav ruteLogin={'/login'} ruteRegister={'/register'}/>

            <Outlet />

            <Footer />
        </>
    )
}

export default DashboardLayout;