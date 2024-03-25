const getReadBookIdFromLS = () =>{
    const readBookId = localStorage.getItem("readBookId");
    return readBookId ? JSON.parse(readBookId) : [];
}

const getWishlistBookIdFromLs = () =>{
    const wishlistBookId = localStorage.getItem("wishlistBookId");
    return wishlistBookId ? JSON.parse(wishlistBookId) : [];
}


const saveBookIdToLS = id =>{
    const getReadBookId = getReadBookIdFromLS();
    const getWishlistBook = getWishlistBookIdFromLs();
    const isExitReadId = getReadBookId.find((readBookId) => readBookId === id);
    const isExitWishlistId = getWishlistBook.find(
      (wishlistBookId) => wishlistBookId === id
    );

        if (isExitReadId) {
            
        }

}