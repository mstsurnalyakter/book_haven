// import React from 'react'
// import PropTypes from 'prop-types'


// const Book = ({ book }) => {
//   const {bookId, bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book || {};
//   console.log(book);
//   return (
//     <div className="card bg-base-100 shadow-xl">
//       <div className="relative w-52 h-40 mt-10">
//         <figure
//           className={`border-2 bg-${image} absolute inset-0 border-red-500 bg-cover bg-center bg-no-repeat object-cover `}
//         >
//         </figure>
//       </div>
//       <div className="card-body">
//         <h2 className="card-title">Shoes!</h2>
//         <p>If a dog chews shoes whose shoes does he choose?</p>
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Book.propTypes = {
//   book:PropTypes.object.isRequired
// };

// export default Book

// import React from "react";
// import PropTypes from "prop-types";

// const Book = ({ book }) => {
//   const {
//     bookId,
//     bookName,
//     author,
//     image,
//     review,
//     totalPages,
//     rating,
//     category,
//     tags,
//     publisher,
//     yearOfPublishing,
//   } = book || {};

//   return (
//     <div className="card bg-base-100 shadow-xl">
//       <div className="relative w-52 h-40 mt-10">
//         <img
//           src={image}
//           alt={bookName}
//           className="absolute inset-0 border-2 border-red-500 object-cover w-full h-full"
//         />
//       </div>
//       <div className="card-body">
//         <h2 className="card-title">{bookName}</h2>
//         <p>{review}</p>
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Book.propTypes = {
//   book: PropTypes.object.isRequired,
// };

// export default Book;

import React from "react";
import PropTypes from "prop-types";
import { Button} from "@material-tailwind/react";
import { Link } from "react-router-dom";



const Book = ({ book }) => {
  const {
    bookId,
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

  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="card  bg-base-100 shadow-xl p-6">
        <figure className="bg-[#F3F3F3]">
          <img src={image} alt="Book image" className="block " />
        </figure>
        <div className="card-body">
          <div className="space-x-3">

            {tags?.map((tag, index) => (
              <Button
                key={index}
                className="bg-[#17BE0A0D] text-[#23BE0A] font-medium"
              >
                {tag}
              </Button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
