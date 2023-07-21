import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className='max-w-7xl mx-auto'>
        <Outlet></Outlet>
        <ToastContainer></ToastContainer>
        </div>
        <Footer></Footer>
        
        </div>
    );
};

export default Main;