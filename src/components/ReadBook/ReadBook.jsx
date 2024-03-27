import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const ReadBook = ({book}) => {
     const {
      bookId,
       bookName,
       author,
       image,
       totalPages,
       rating,
       category,
       tags,
       publisher,
       yearOfPublishing,
     } = book || {};

  return (
    <Card className="lg:flex-row flex-col  shadow mx-auto w-full p-5 rounded-2xl border-2 border-[#13131326]">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 lg:w-2/5 w-full hero shrink-0 bg-[#1313130D] p-10 rounded-2xl flex items-center justify-center"
      >
        <img src={image} alt="book-image" className="" />
      </CardHeader>
      <CardBody className="w-full">
        <h2 className="mb-4 playfair-display font-bold text-[24px] text-[#131313]">
          {bookName}
        </h2>
        <Typography variant="h6" className="mb-6">
          By : {author}
        </Typography>

        <div className="gap-3  mb-6 flex flex-col md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <b>Tag</b>
            {tags?.map((tag, index) => (
              <Button
                key={index}
                className="bg-[#17BE0A0D] text-[#23BE0A] font-medium rounded-[30px]"
              >
                #{tag}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn />
            <span>Year of Publishing: {yearOfPublishing}</span>
          </div>
        </div>
        <div className="space-x-3 mb-6 flex items-center">
          <p className="flex items-center gap-2">
            <IoPeopleOutline />
            <span>Publisher: {publisher}</span>
          </p>
          <p className="flex items-center gap-2">
            <HiOutlineDocumentChartBar />
            <span>Page: {totalPages}</span>
          </p>
        </div>

        <div className="border-b-2 border-[#13131326] mb-6"></div>

        <div className="flex items-center gap-3">
          <Button
            className="bg-[#328EFF26] rounded-[30px] text-[#328EFF] border-2  capitalize"
            size="md"
          >
            Category: {category}
          </Button>
          <Button
            className="bg-[#FFAC3326] rounded-[30px] text-[#FFAC33] border-2  capitalize"
            size="md"
          >
            Rating: {rating}
          </Button>
          <Button
            className="bg-[#23BE0A] text-white border-2 rounded-[30px] capitalize"
            size="md"
          >
            <Link to={`/book-details/${bookId}`}>View Details</Link>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

ReadBook.propTypes = {
  book:PropTypes.object.isRequired
}

export default ReadBook