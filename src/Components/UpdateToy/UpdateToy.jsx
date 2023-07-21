import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateToy = () => {
    useEffect(() => {
        document.title = "Toy Cars Store | Update Toy";
      }, []);
    const {id} = useParams();
    const [toy,setToy] = useState([]);
    useEffect(() => {
        fetch(`https://toy-cars-server-blue.vercel.app/allToyss/${id}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [toy]);
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        fetch(`https://toy-cars-server-blue.vercel.app/updateToy/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.modifiedCount>0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Toy has been updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          });
        console.log(data);
        
        reset();
      };
    return (
        <div className="flex gap-10 justify-center items-center h-100vh p-[20px]">
        <img className="w-1/2" src={toy.picture} alt="" />
      <div className="w-2/5 h-[340px]">
      <h4 className="text-4xl text-center font-semibold mb-8 font-serif text-cyan-500">Update Toy</h4>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
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
            <input
              className="border-none p-[15px] m-[5px]"
              {...register("price")}
              placeholder="price"
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
            <input className="btn btn-block py-[7px] px-[20px] border-none bg-cyan-600 text-white text-md font-medium text-center m-[10px] rounded-md" value="Update" type="submit"/>
          </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateToy;