import React from 'react'
import PropTypes from 'prop-types'
import useBooksData from '../../Hooks/useBooksData';
import Book from '../Book/Book';

const Books = () => {
     const { books, loading } = useBooksData();

  return (
    <div>
      <h1
        className="text-[#131313] text-center mb-9 text-4xl font-bold
      "
      >
        Books
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}


Books.propTypes = {}

export default Books