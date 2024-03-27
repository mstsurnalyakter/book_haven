import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from 'react-toastify';

const Root = () => {
  return (
    <div className="work-sansl ">
      <NavBar />
      <div className="mx-auto max-w-7xl px-6 mt-10 mb-10 min-h-[calc(100vh-366px)]">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Root