import React from 'react';
 
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const Contact = () => {
    const navigate = useNavigate();
    const handlerSubmitContact =(e)=>{
        e.preventDefault();
        navigate("/");
    }
  return (
    <div>
         <div>
           <Navbar></Navbar>
        </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
       
      <div className="card bg-white shadow-xl rounded-md w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>

        <form onSubmit={handlerSubmitContact} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Message</span>
            </label>
            <textarea
              placeholder="Write your message here"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            />
          </div>

          <div className="form-control mt-4">
            <button className="btn btn-neutral text-white w-full">
              Submit
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Or contact us via email at:</p>
          <p className="text-lg text-blue-600">mdniloyhasan544@gmail.com</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;