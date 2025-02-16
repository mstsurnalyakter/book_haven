import  { useEffect, useState } from 'react'
import useBooksData from '../../Hooks/useBooksData'
import { useParams } from 'react-router';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {  saveReadBookIdToLS, saveWishlistBookIdToLS } from '../../utils/localStorage';


const BookDetails = () => {
    const { books, loading } = useBooksData();
    const [book, setBook] = useState({});
    const {bookId} = useParams();
    const id = parseInt(bookId);


    useEffect(()=>{
        const findBook = books.find((item) => item.bookId === id);
        setBook(findBook)
    },[books,id]);

    const handleReadBook = () =>{
      saveReadBookIdToLS(id);
    }
    const handleWishlistBook = () => {
      saveWishlistBookIdToLS(id);
    };

     const {
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
    <Card className="lg:flex-row flex-col w-full shadow-none">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 lg:w-2/5 w-full hero  shrink-0 bg-[#1313130D] p-10 rounded-r-none"
      >
        <img src={image} alt="book-image" className="lg:w-full object-cover" />
      </CardHeader>
      <CardBody className="space-y-7">
        <h2 className="font-bold text-4xl text-[#131313] #131313 playfair-display">
          {bookName}
        </h2>
        <Typography variant="h6" className="">
          By : {author}
        </Typography>
        <div className="border-b-2 border-[#13131326]"></div>
        <Typography variant="h6" className="mb-4">
          {" "}
          {category}
        </Typography>
        <div className="border-b-2 border-[#13131326]"></div>
        <Typography variant="small" className="">
          <b className="font-bold">Review:</b> {review}
        </Typography>
        <div className="space-x-3 ">
          <b>Tag</b>
          {tags?.map((tag, index) => (
            <Button
              key={index}
              className="bg-[#17BE0A0D] text-[#23BE0A] font-medium"
            >
              #{tag}
            </Button>
          ))}
        </div>

        <div className="border-b-2 border-[#13131326] "></div>
        <p className="flex items-center gap-14">
          <span>Number of Page:</span>
          <b>{totalPages}</b>
        </p>
        <p className="flex items-center gap-14">
          <span> Published:</span>
          <b>{publisher}</b>
        </p>
        <p className="flex items-center gap-14">
          <span> Year of Publishing:</span>
          <b>{yearOfPublishing}</b>
        </p>
        <p className="flex items-center gap-14">
          <span>Rating:</span>
          <b>{rating}</b>
        </p>

        <div className="gap-2 flex">
          <Button
            onClick={handleReadBook}
            className="hover:bg-[#23BE0A] hover:text-white border-2 text-[#23BE0A] bg-white capitalize"
            size="md"
          >
            Read
          </Button>
          <Button
            onClick={handleWishlistBook}
            className="bg-[#59C6D2] text-white capitalize"
            size="md"
          >
            Wishlist
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

BookDetails.propTypes = {}

export default BookDetails