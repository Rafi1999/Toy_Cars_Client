
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const SignUp = () => {
  useEffect(() => {
    document.title = "Toy Cars Store | Sign Up";
  }, []);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  const {user,createUser} = useContext(AuthContext);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
   const [error,setError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const handleSignup= (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(photo);
        if (emailError) {
            e.target.email.focus();
            return;
          } else if (passwordError) {
            e.target.password.focus();
            return;
          }
        createUser(email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            setError("")
            form.reset();
            setPassword("")
            updateProfile(user, {
              displayName: name, photoURL: photo
            }).then(() => {
              navigate(from, { replace: true })
              console.log("updated");
              // Profile updated!
              // ...
            }).catch((error) => {
              console.log("not updated");
              // An error occurred
              // ...
            });
        })
        .catch((error)=>{
            setError(error.message)
            console.log(error.message);
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
      
      <img src={"https://i.postimg.cc/7L0c3SqL/image.png"} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-4xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSignup}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="mb-4">
  <label className="label">
    Photo URL
  </label>
  <input className="input input-bordered w-full" id="photo" type="text" name='photo' placeholder="photo" required></input>
</div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input className="input input-bordered" id="password" name='password' required value={password} onChange={handlePassword} type="password" placeholder="****************** "></input>
     {passwordError && <span className='error'>{passwordError}</span>}
          
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
        </form>
        <p className='my-4 text-center'>Already have an account? <Link 
        className='text-orange-500 font-semibold' to='/login'>Login</Link></p>
      
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;