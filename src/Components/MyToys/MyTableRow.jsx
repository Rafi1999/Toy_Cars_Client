import { Link } from "react-router-dom";

const MyTableRow = ({ toy,handleDelete }) => {
  const {
    _id,
    picture,
    name,
    sellerName,
    price,
    subCategory,
    availableQuantity,
    detailDescription,
    rating
  } = toy;

  const words = detailDescription.split(' ').filter(word => word !== '');
  const truncatedDescription = words.slice(0, 5).join(' ');
  const remainingDescription = words.length > 5 ? '...' : '';
  const displayedDescription = `${truncatedDescription}${remainingDescription}`;

  return (
    <tr>
      <td> <img className='w-[80px] rounded-xl shadow-sm' src={picture} alt="" /> </td>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>{rating}</td>
      <td>{displayedDescription}</td>
      <td><Link to={`/updateToy/${_id}`} className='btn btn-info rounded-2xl text-white font-semibold'>Update</Link></td>
      <td><Link onClick={()=>handleDelete(_id)} className='btn btn-error rounded-2xl text-white font-semibold'>Delete</Link></td>
    </tr>
  );
};


export default MyTableRow;