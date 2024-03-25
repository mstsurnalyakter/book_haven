import React from 'react'
import PropTypes from 'prop-types';

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from 'react-router-dom';



function NavList() {
  return (
    <List className="mt-4 items-center mb-6 gap-4 lg:gap-2 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] p-2 hover:bg-[#23BE0A] hover:text-white text-lg text-[#23BE0A] rounded-lg"
              : "p-2 text-[#131313CC]  hover:bg-[#23BE0A] hover:text-white text-lg hover:rounded-lg"
          }
        >
          Home
        </NavLink>
      </Typography>

      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink
          to={"/listed-books"}
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] p-2 hover:bg-[#23BE0A] hover:text-white text-lg text-[#23BE0A] rounded-lg"
              : "p-2 text-[#131313CC]  hover:bg-[#23BE0A] hover:text-white text-lg hover:rounded-lg"
          }
        >
          Listed Books
        </NavLink>
      </Typography>

      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink
          to={"/pages-to-read"}
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] p-2 hover:bg-[#23BE0A] hover:text-white text-lg text-[#23BE0A] rounded-lg"
              : "p-2 text-[#131313CC]  hover:bg-[#23BE0A] hover:text-white text-lg hover:rounded-lg"
          }
        >
          Pages to Read
        </NavLink>
      </Typography>

      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink
          to={"/authors"}
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] p-2 hover:bg-[#23BE0A] hover:text-white text-lg text-[#23BE0A] rounded-lg"
              : "p-2 text-[#131313CC]  hover:bg-[#23BE0A] hover:text-white text-lg hover:rounded-lg"
          }
        >
          Authors
        </NavLink>
      </Typography>

      <Typography
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <NavLink
          to={"/about-us"}
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] p-2  hover:bg-[#23BE0A] hover:text-white text-lg text-[#23BE0A] rounded-lg"
              : "p-2 text-[#131313CC]  hover:bg-[#23BE0A] hover:text-white text-lg hover:rounded-lg"
          }
        >
          About Us
        </NavLink>
      </Typography>
    </List>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div className="shadow-lg sticky top-0 z-50">
      <Navbar className="mx-auto max-w-7xl shadow-none px-4 py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            variant="h2"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            BookHaven
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Button className="bg-[#23BE0A] text-white" size="md">
              Sign In
            </Button>
            <Button className="bg-[#59C6D2] text-white" size="md">
              Sign Up
            </Button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button className="bg-[#23BE0A] text-white" size="md" fullWidth>
              Sign In
            </Button>
            <Button className="bg-[#59C6D2] text-white" size="md" fullWidth>
              Sign Up
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

NavBar.propTypes = {}

export default NavBar