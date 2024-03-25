import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useBooksData from '../../Hooks/useBooksData'
import { useParams } from 'react-router';

const BookDetails = () => {
    const { books, loading } = useBooksData();
    const {book ,setBook} = useState({});
    const {bookId} = useParams();
    const id = parseInt(bookId);


    useEffect(()=>{
        const findBook = books.find((item) => item.bookId === id);
        console.log(findBook);
    },[books,setBook,id]);

     const {
       bookName,
       author,
       image,
       review,
       totalPages,
       rating,
       category,
       tags,
       publisher,
       yearOfPublishing,
     } = book || {};
    console.log(book);
  return (
    <div>BookDetails</div>
  )
}

BookDetails.propTypes = {}

export default BookDetails