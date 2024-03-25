import { toast } from "react-toastify";

const getReadBookIdFromLS = () => {
  const readBookId = localStorage.getItem("readBookId");
  return readBookId ? JSON.parse(readBookId) : [];
};

const getWishlistBookIdFromLs = () => {
  const wishlistBookId = localStorage.getItem("wishlistBookId");
  return wishlistBookId ? JSON.parse(wishlistBookId) : [];
};

const saveBookIdToLS = (id) => {
  const getReadBookId = getReadBookIdFromLS();
  const getWishlistBook = getWishlistBookIdFromLs();
  const isExitReadId = getReadBookId.find((readBookId) => readBookId === id);
  const isExitWishlistId = getWishlistBook.find(
    (wishlistBookId) => wishlistBookId === id
  );

  if (isExitReadId) {
    toast.error("You have Already Read this Book!");
  } else {
    getReadBookId.push(id);
    localStorage.setItem("readBookId", JSON.stringify(getReadBookId));
    toast.success("Book added to Read List Successfully!");
  }

  if (isExitWishlistId) {
    toast.error("You have Already Added this Book to Wishlist!");
  } else {
    if (isExitReadId) {
      toast.error("You have Already Read this Book!");
    } else {
      getWishlistBook.push(id);
      localStorage.setItem("readBookId", JSON.stringify(getWishlistBook));
      toast.success("Book added to Wishlist Successfully!");
    }
  }
};

export { getReadBookIdFromLS, getWishlistBookIdFromLs, saveBookIdToLS };
