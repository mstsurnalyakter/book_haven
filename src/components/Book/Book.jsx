import PropTypes from "prop-types";
import { Button} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";



const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book || {};

  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="card  bg-base-100 shadow-xl p-6">
        <figure className="bg-[#F3F3F3] mb-6">
          <img src={image} alt="Book image" className="block " />
        </figure>
        <div className="space-y-4">
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
          <h2 className="card-title playfair-display text-xl font-bold text-[#131313]">
            {bookName}
          </h2>
          <p>By: {author}</p>
          <div className="border-b-2 border-dashed border-[#13131326] mb-6"></div>
          <div className="flex justify-between items-center">
            <span>{category}</span>
            <p className="flex items-center gap-1">
              {rating}
              <FaRegStar />
            </p>
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
