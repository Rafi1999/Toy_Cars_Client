import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const GoggleLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    const {googleSignIn} = useContext(AuthContext);
    const handleGoggleSignIn=()=>{
        googleSignIn(navigate,from)
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button className="btn btn-circle btn-outline border-none hover:btn-xl border-none" onClick={handleGoggleSignIn}>
                   <img src="https://i.postimg.cc/65n2kF8H/image.png" alt="" /> 
                </button>
            </div>
        </div>
    );
};

export default GoggleLogin;