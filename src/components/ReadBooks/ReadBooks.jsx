import PropTypes from 'prop-types'
import ReadBook from '../ReadBook/ReadBook';


const ReadBooks = ({ sortedBooks }) => {

  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      {sortedBooks.map((book) => (
        <ReadBook key={book.bookId} book={book} />
      ))}
    </div>
  );
};

ReadBooks.propTypes = {
  sortedBooks:PropTypes.array.isRequired
};

export default ReadBooks;