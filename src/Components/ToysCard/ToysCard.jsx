import React from "react";
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const ToysCard = ({toy}) => {
    const {_id,picture,name,price,rating} = toy;
  
    return (
        <div className="card w-[350px] h-[400px] bg-base-200 shadow-xl md:shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="" className=" rounded-xl w-[220px] h-[190px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">{name}</h2>
    <div className="grid gap-3 font-medium my-2">
    <p>Price : ${price}</p>
    <div className="flex gap-2 items-center">
    <p>Rating : {rating}</p>
    <Rating
    placeholderRating={rating}
    readonly
    emptySymbol={<FaRegStar></FaRegStar>}
    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
    fullSymbol={<FaStar></FaStar>}
    ></Rating>
    </div>
    </div>
    <div className="card-actions">
      <Link to={`/allToyss/${_id}`} className='btn btn-primary'>View Details</Link>
    </div>
  </div>
</div>
    );
};

export default ToysCard;