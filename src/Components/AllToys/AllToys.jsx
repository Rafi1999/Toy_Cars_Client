import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const AllToys = () => {
  useEffect(() => {
    document.title = "Toy Cars Store | All Toys";
  }, []);
    const [toys,setToys] = useState([]);
    useEffect(()=>{
        fetch('https://toy-cars-server-blue.vercel.app/allToys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    const [searchText, setSearchText] = useState("");
    const handleSearch = () => {
        fetch(`https://toy-cars-server-blue.vercel.app/getToysByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };
    return (
        <div>
        <div className="text-lg font-semibold  py-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="rounded-md h-12 px-4"
            placeholder={"Search Toy"}
          />{" "}
          <button className="btn bg-blue-500 border-none  px-7" onClick={handleSearch}>Search</button>
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
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            toys.map(toy=><TableRow key={toy._id} toy={toy}></TableRow>)
        }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllToys;