import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import MyTableRow from "./MyTableRow";
import Select from 'react-select';
import Swal from "sweetalert2";

const options = [
  { value: 'high', label: 'Price high to low' },
  { value: 'low', label: 'Price low to high' },
]
const MyToys = () => {
    useEffect(() => {
        document.title = "Toy Cars Store | My Toys";
      }, []);
    const {user} = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState("asd");

    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };

  
    const [toys,setToys] = useState([]);
    useEffect(()=>{
        if (user && selectedOption) {
            fetch(`https://toy-cars-server-blue.vercel.app/myToys/${user.email}?sort=${selectedOption.value}`)
              .then(res => res.json())
              .then(data => setToys(data))
              .catch(error => console.error('Error fetching data:', error));
          }
    },[user,selectedOption,toys]);
    const handleDelete = (id)=> {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-cars-server-blue.vercel.app/allToys/${id}`,{
                    method : 'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount > 0){
                        const remaining = toys.filter(toy=>toy._id !=id)

                        setToys(remaining);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
                
            }
    }) }
    return (
        <div>
            <div className="text-base font-semibold  py-2 text-center flex gap-2 items-center justify-end">
            <p>Sort By</p>
            <Select
        options={options}
        value={selectedOption}
        onChange={handleOptionChange}
        isSearchable={false}
      />      
        </div>
        <div className="overflow-x-auto w-full my-5">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Toy Name</th>
        <th>Seller</th>
        <th>Sub-Category</th>
        <th>Price($)</th>
        <th>Available No</th>
        <th>Rating</th>
        <th>Detail Description</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            toys.map(toy=><MyTableRow key={toy._id} toy={toy} handleDelete={handleDelete}></MyTableRow>)
        }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyToys;