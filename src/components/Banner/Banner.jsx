import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] min-h-[550px] rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/the_da_vinci_code.png" className="max-w-sm rounded-lg " />
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-[#131313] leading-[60px] mb-10">
            Books to freshen up your bookshelf
          </h1>
          <Link>
            <Button className="bg-[#23BE0A] text-white" size="md">
              View The List
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {}

export default Banner