import React from 'react'
import PropTypes from 'prop-types'
import useLocalStorage from '../../Hooks/useLocalStorage';
import WishlistBook from '../WishlistBook/WishlistBook';


const WishlistBooks = () => {
    const { wishlistBookData, loading } = useLocalStorage();
    console.log(wishlistBookData);
  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      {wishlistBookData.map((book) => (
        <WishlistBook book={book} key={book.bookId} />
      ))}
    </div>
  );
}

WishlistBooks.propTypes = {}

export default WishlistBooks