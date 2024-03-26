import React from 'react'
import PropTypes from 'prop-types'
import useLocalStorage from '../../Hooks/useLocalStorage';
import ReadBook from '../ReadBook/ReadBook';

const ReadBooks = () => {
    const { readBookData, loading } = useLocalStorage
    ();
    console.log(readBookData, loading);
  return (
    <div className='grid grid-cols-1 gap-6 w-full'>
      {readBookData.map((book) => (
        <ReadBook key={book.bookId} book={book} />
      ))}
    </div>
  );
}

ReadBooks.propTypes = {}

export default ReadBooks