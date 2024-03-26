import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useBooksData = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadBooksData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data.json");
        if (!res.ok) {
          throw new Error("Fail to books data fetch!");
        }
        const data = await res.json();
        const booksData = data.books;
        setBooks(booksData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadBooksData();
  }, []);

  
  return { books, loading };
};

useBooksData.propTypes = {};

export default useBooksData;
