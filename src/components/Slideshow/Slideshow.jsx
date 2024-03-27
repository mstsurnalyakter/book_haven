import  { useState, useEffect } from "react";
import useBooksData from "../../Hooks/useBooksData";

const Slideshow = () => {
  const [currentElement, setCurrentElement] = useState(0);
  const { books, loading } = useBooksData()


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement((prevElement) =>
        prevElement === books.length - 1 ? 0 : prevElement + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [books.length]);

  return (
    <div className="mb-10">
      <div className=" relative hero  bg-[#1313130D] mb-20 min-h-[450px] lg:min-h-[400px] rounded-3xl">
        {" "}
        {books.map((book, index) => (
          <div
            key={index}
            className={`slide ${
              currentElement === index ? "active" : ""
            } hero-content flex-col lg:flex-row-reverse gap-20`}
            style={{
              position: "absolute",
              opacity: currentElement === index ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <img
              src={book.image}
              alt={book.bookName}
              style={{ width: "200px", height: "300px" }}
            />
            <h2 className="font-bold text-2xl playfair-display">
              {book.bookName}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
