import  { useState } from 'react'

import useLocalStorage from '../../Hooks/useLocalStorage';
import WishlistBooks from '../../components/WishlistBooks/WishlistBooks';
import ReadBooks from '../../components/ReadBooks/ReadBooks';


const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
    const [sortBy, setSortBy] = useState(null);
    const [descending, setDescending] = useState(false);


    const [sortWishlistBy, setSortWishlistBy] = useState(null);
    const [descendingWishlist, setDescendingWishlist] = useState(false);


  const {readBookData, wishlistBookData, loading} = useLocalStorage();

    const handleSort = (field) => {
      if (sortBy === field) {
        setDescending(!descending);
      } else {
        setSortBy(field);
        setDescending(false);
      }
    };

  const sortedBooks = [...readBookData].sort((a, b) => {
    if (sortBy) {
      if (descending) {
        return b[sortBy] - a[sortBy];
      } else {
        return a[sortBy] - b[sortBy];
      }
    }
    return 0;
  });


   const handleSortWishlist = (field) => {
     if (sortWishlistBy === field) {
       setDescendingWishlist(!descendingWishlist);
     } else {
       setSortWishlistBy(field);
       setDescendingWishlist(false);
     }
   };

  const sortedWishlistBooks = [...wishlistBookData].sort((a, b) => {
    if (sortWishlistBy) {
      if (descendingWishlist) {
        return b[sortWishlistBy] - a[sortWishlistBy];
      } else {
        return a[sortWishlistBy] - b[sortWishlistBy];
      }
    }
    return 0;
  });


  return (
    <div>
      <div className="overflow-hidden">
        <article className="space-y-8 ">
          <div className="bg-[#1313130D] h-28 rounded-2xl relative">
            <div className="items-center justify-center flex absolute inset-0">
              <h2 className="text-3xl text-[#131313] font-bold">Books</h2>
            </div>
          </div>

          {tabIndex === 0 && (
            <div className="bg-[#23BE0A] cursor-pointer w-44 rounded-lg mx-auto p-3">
              <select
                className="w-full bg-[#23BE0A] outline-none  border-none text-white"
                id="sort"
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="" className="">
                  ----- Sort By ----
                </option>
                <option className="bg-white text-black" value="rating">
                  Rating
                </option>
                <option className="bg-white text-black" value="totalPages">
                  Number of Pages
                </option>
                <option
                  className="bg-white text-black"
                  value="yearOfPublishing"
                >
                  Published Year
                </option>
              </select>
            </div>
          )}

          {tabIndex === 1 && (
            <div className="bg-[#23BE0A] cursor-pointer w-44 rounded-lg mx-auto p-3">
              <select
                className="w-full bg-[#23BE0A] outline-none  border-none text-white"
                id="sort"
                onChange={(e) => handleSortWishlist(e.target.value)}
              >
                <option value="" className="">
                  ----- Sort By ----
                </option>
                <option className="bg-white text-black" value="rating">
                  Rating
                </option>
                <option className="bg-white text-black" value="totalPages">
                  Number of Pages
                </option>
                <option
                  className="bg-white text-black"
                  value="yearOfPublishing"
                >
                  Published Year
                </option>
              </select>
            </div>
          )}

          <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap border-b">
            <button
              onClick={() => setTabIndex(0)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              }  `}
            >
              <span>Read Books</span>
            </button>
            <button
              onClick={() => setTabIndex(1)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              }  `}
            >
              <span>Wishlist Books</span>
            </button>
          </div>

          {tabIndex === 1 ? (
            <WishlistBooks sortedWishlistBooks={sortedWishlistBooks} />
          ) : (
            <ReadBooks sortedBooks={sortedBooks} />
          )}
        </article>
      </div>
    </div>
  );
};

ListedBooks.propTypes = {}

export default ListedBooks