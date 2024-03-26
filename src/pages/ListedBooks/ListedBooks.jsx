import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import useLocalStorage from '../../Hooks/useLocalStorage'
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const ListedBooks = () => {


  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div className="overflow-hidden">
        <article className="space-y-8 ">
          <div className="bg-[#1313130D] h-28 rounded-2xl relative">
            <div className="items-center justify-center flex absolute inset-0">
              <h2 className="text-3xl text-[#131313] font-bold">Books</h2>
            </div>
          </div>
          {/* <div className="space-y-6"> */}
          <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap border-b">
            <Link
              to={``}
              onClick={() => setTabIndex(0)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              }  `}
            >
              <span>Read Books</span>
            </Link>
            <Link
              to={`wishlist-books`}
              onClick={() => setTabIndex(1)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              }  `}
            >
              <span>Wishlist Books</span>
            </Link>
          </div>

          {/* </div> */}
          <Outlet />
        </article>
      </div>
    </div>
  );
}

ListedBooks.propTypes = {}

export default ListedBooks