import React from 'react'
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from 'react-toastify';

const Root = () => {
  return (
    <div className="work-sans">
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 mt-10 mb-10">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Root