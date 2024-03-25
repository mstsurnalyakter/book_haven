import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useBooksData from './useBooksData'
import { getReadBookIdFromLS, getWishlistBookIdFromLs } from '../utils/localStorage';

const useLocalStorage = () => {
    const { books, loading } = useBooksData();
    const [readBookData,setReadBookData] = useState([])
    const [wishlistBookData, setWishlistBookData] = useState([]);

    useEffect(()=>{
        const getReadBookId = getReadBookIdFromLS();
        const getWishlistBookId = getWishlistBookIdFromLs();

        const filterReadBooks = books.filter((book) =>
          getReadBookId.includes(book.bookId)
        );
        setReadBookData(filterReadBooks);

        const filterWishlistBooks = books.filter((book) =>
          getWishlistBookId.includes(book.bookId)
        );
        setWishlistBookData(filterWishlistBooks)

    },[books])

  return {readBookData,wishlistBookData, loading} ;
}

useLocalStorage.propTypes = {}

export default useLocalStorage