import { Link } from "react-router-dom";

const TableRow = ({toy}) => {
    const {_id,picture, name, sellerName, price, subCategory,
        availableQuantity} = toy;
    return (
        <tr>
            <td> <img className='w-[80px] rounded-xl shadow-sm' src={picture} alt="" /> </td>
            <td>{name}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td><Link to={`/allToyss/${_id}`} className='btn btn-primary'>View Details</Link></td>
        </tr>
    );
};

export default TableRow;