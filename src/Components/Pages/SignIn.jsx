import { useState, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    const { logIn, setUser,forgotEmail,logInGoogle } = useContext(AuthContext);  
    const [error, setError] = useState("");  
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");   
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then((result) => {
                setUser(result.user);
                navigate(location?.state ? location.state : "/");
                toast.success("Login successful!");
                e.target.reset();  
            })
            .catch((err) => {
                setError("Failed to log in. Please check your credentials.");
                toast.error(`Error: ${err.message}`);
                console.error(err.code, err.message);  
            })
            
    };
    const handlerForgotPassword = ()=>{
        const email = emailRef.current.value;
         
        if(!email)
        {
            toast.error("Please a valid email")
        }
        else{
            forgotEmail(email)
            .then(()=>{
                alert("Check You Email Address")
            })
            .catch((err)=>
            {
                console.log(err.message);
            })
        }
    }
    const handlerGoogleLogIn = ()=>{
        logInGoogle()
        .then(result=>{
            // console.log(result.user);
            navigate(location?.state ? location.state : "/");
            toast.success("Login successful!");
        })
        .catch(error =>{
            console.log(error.message); 
            toast.error(`Error: ${err.message}`);
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover"
        style={{ backgroundImage: `url('https://i.ibb.co.com/kBgktZ0/form-background.webp')` }}>
            <div className="card bg-base-100 w-full max-w-lg shadow-xl rounded-lg">
                <h1 className="text-3xl my-6 text-center font-bold text-gray-800">
                    Login to Your Account
                </h1>
                <form onSubmit={handleLogin} className="card-body">
                   
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text text-lg font-semibold text-gray-700">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="input input-bordered focus:ring focus:ring-blue-300"
                            required
                            ref={emailRef}
                        />
                    </div>

               
                    <div className="form-control">
                        <label htmlFor="password" className="label">
                            <span className="label-text text-lg font-semibold text-gray-700">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered focus:ring focus:ring-blue-300"
                            required
                        />
                        <label className="label">
                            <a onClick={handlerForgotPassword} href="#" className="label-text-alt link link-hover text-blue-500">
                                Forgot password?
                            </a>
                        </label>
                    </div>

                
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    
                    <div className="form-control mt-4">
                        <button
                            type="submit"
                            className={`btn btn-neutral rounded-lg text-white hover:bg-neutral-focus}`}
                            
                        >
                           Login
                        </button>
                    </div>
                </form>
                    <div className="divider">OR</div>

                   <div className="flex items-center justify-center">
                   <button onClick={handlerGoogleLogIn} className="text-4xl"> <FcGoogle></FcGoogle></button>
                   </div>

              
                <p className="text-center font-semibold text-gray-600 mt-4 mb-6">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-red-600 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;