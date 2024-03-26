import PropTypes from 'prop-types'
import WishlistBook from '../WishlistBook/WishlistBook';


const WishlistBooks = ({ sortedWishlistBooks }) => {

  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      {sortedWishlistBooks.map((book) => (
        <WishlistBook book={book} key={book.bookId} />
      ))}
    </div>
  );
};


WishlistBooks.propTypes = {
  sortedWishlistBooks:PropTypes.array.isRequired
};

export default WishlistBooks