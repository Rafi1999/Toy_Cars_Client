import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
//import { useForm } from "react-hook-form";
import "./AddToy.css";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const AddToy = () => {
  useEffect(() => {
    document.title = "Toy Cars Store | Add Toy";
  }, []);
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        
        fetch("https://toy-cars-server-blue.vercel.app/addToy", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.insertedId){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Toy has been added',
                showConfirmButton: false,
                timer: 1500
              })
            }
          });
        console.log(data);
        reset();
      };
    return (
        <div className="flex justify-center items-center h-100vh p-[20px]">
      <div className="w-1/2 h-[340px]">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="border-none p-[15px] m-[5px]"
              {...register("picture")}
              placeholder="toy image link"
              type="url"
              
            />
            <input
              className="border-none p-[15px] m-[5px]"
              {...register("name")}
              placeholder="toy Name"
              defaultValue=""
            />

            <input
              className="border-none p-[15px] m-[5px]"
              value={user?.displayName}
              {...register("sellerName", { required: true })}
              placeholder="seller name"
              
            />
            <input
              className="border-none p-[15px] m-[5px]"
              {...register("sellerEmail")}
              value={user?.email}
              placeholder="your email"
              type="email"
            />
            <select className="border-none p-[15px] m-[5px]" {...register("subCategory")}>
              <option value="Sports Car">Sports car</option>
              <option value="Regular Car">Regular car</option>
              <option value="Truck">Truck</option>
              
            </select>
          
            <input
              className="border-none p-[15px] m-[5px]"
              {...register("price")}
              placeholder="price"
              type="text"
            />
            <input
              className="border-none p-[15px] m-[5px]"
              {...register("rating", { required: true })}
              placeholder="rating"
              type="text"
            />
            <input
              className="border-none p-[15px] m-[5px]"
              {...register("availableQuantity", { required: true })}
              placeholder="available quantity"
              type="number"
            />
            
            <input
              className="border-none p-[15px] m-[5px]"
              {...register("detailDescription")}
              placeholder="description"
            />
            <input className="btn w-60% py-[7px] px-[20px] border-none bg-cyan-600 text-white text-md font-medium text-center m-[10px] rounded-md" value="Add Toy" type="submit"/>
          </form>
        </div>
      </div>
    </div>
    );
};

export default AddToy;