import { useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    useEffect(() => {
        document.title = "Toy Cars Store | Details";
      }, []);
    const toy = useLoaderData();
    const { picture, name, sellerName, price, rating, detailDescription,
        sellerEmail,
        availableQuantity} = toy;
    return (
        <div className="grid grid-cols-2 gap-4 my-8 h-[340px]">
        <img className="h-[340px] rounded-md w-[460px]" src={picture} alt="" />
        <div className="grid text-left bg-gray-100 rounded-xl w-[540px]">
            <p className="text-3xl font-bold text-orange-500 mt-5 text-center">{name}</p>
            <div className="flex justify-between gap-5 font-semibold text-lg mx-5">
            <p className="">Price: ${price}</p>
            <p className="">Available : {availableQuantity}</p>
            </div>
            <div className="flex justify-between gap-5 mx-5 font-semibold text-lg">
            <p className="">Rating : {rating}</p>
            <Rating
    placeholderRating={rating}
    readonly
    emptySymbol={<FaRegStar></FaRegStar>}
    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
    fullSymbol={<FaStar></FaStar>}
    ></Rating>
            </div>
            <p className="font-semibold text-base mx-5">Description : {detailDescription}</p>
            <div className="flex font-semibold gap-5 justify-between mx-5">
            <p className=" font-semibold">Seller Name: {sellerName}</p>
            <p className=" font-semibold">Seller Email: {sellerEmail}</p>
            </div>
        </div>      
        </div>
    );
};

export default ToyDetails;