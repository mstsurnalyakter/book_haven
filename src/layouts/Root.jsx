import React from 'react'
import NavBar from '../pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 mt-10">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root