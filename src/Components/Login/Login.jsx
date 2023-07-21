import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoggleLogin from "./GoggleLogin";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const Login = () => {
    useEffect(() => {
        document.title = "Toy Cars Store | Login";
      }, []);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        if (emailError) {
            event.target.email.focus();
            return;
          } else if (passwordError) {
            event.target.password.focus();
            return;
          }        signIn(email,password)
        .then(userCredential=>{
            const user = userCredential.user;
            setSuccess("User Login Successfully")
            setError("")
            form.reset();
            setPassword(""),
            navigate(from, { replace: true })
        })
        .catch(err=>{
            console.log(err.message.auth);
            setError(err.message);
        })
        
    }
    const handlePassword = (e) => {
        e.preventDefault;
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
          setPasswordError("Password must be at least 6 characters long");
        } else if (!/[A-Z]/.test(passwordInput)) {
          setPasswordError("Password must contain at least one capital letter");
        } else {
          setPasswordError("");
        }
      };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-14 w-1/2">

                    <img src={"https://i.postimg.cc/0jDbxWvs/image.png"} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input className="input input-bordered" id="password" name='password' required value={password} onChange={handlePassword} type="password" placeholder="****************** "></input>
     {passwordError && <span className='error'>{passwordError}</span>}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Toy Car Store? <Link
                            className='text-orange-500 font-semibold' to='/signup'>Sign Up</Link></p>
<GoggleLogin></GoggleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;