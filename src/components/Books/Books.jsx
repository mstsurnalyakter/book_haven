import React from 'react'
import PropTypes from 'prop-types'
import useBooksData from '../../Hooks/useBooksData';

const Books = () => {
     const { books, loading } = useBooksData();
     console.log(books, loading);
  return (
    <div>
      <h1>Books</h1>
      <div>
        {
            books.map(book =><Boo)
        }
      </div>
    </div>
  );
}

Books.propTypes = {}

export default Books