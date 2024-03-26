import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useLocalStorage from './useLocalStorage';

const useSort = () => {
        const [sortBy, setSortBy] = useState(null);
        const [descending, setDescending] = useState(false);

        const [sortedReadBooks,setSortedReadBooks] = useState([])

        const { readBookData, wishlistBookData, loading } = useLocalStorage();

        const handleSortBooks = (field) => {
          if (sortBy === field) {
            // Toggle descending order if the same field is clicked again
            setDescending(!descending);
          } else {
            // Set the new sort field and default to ascending order
            setSortBy(field);
            setDescending(false);
          }
        };

        useEffect(() => {
          const sortedBooks = [...readBookData].sort((a, b) => {
            if (sortBy) {
              if (descending) {
                return b[sortBy] - a[sortBy]; // Sort in descending order
              } else {
                return a[sortBy] - b[sortBy]; // Sort in ascending order
              }
            }
            return 0;
          });
          setSortedReadBooks(sortedBooks);
        }, [readBookData,sortBy,descending]);




  return { sortedReadBooks, handleSortBooks };
}

useSort.propTypes = {}

export default useSort