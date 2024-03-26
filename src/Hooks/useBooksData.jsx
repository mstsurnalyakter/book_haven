import  { useEffect, useState } from "react";


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

export default useBooksData;
