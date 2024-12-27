import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";


const Login = ({onLogin}) => {

    const {register,handleSubmit,formState:{errors}}
    =useForm();

    const apiUrl = import.meta.env.VITE_PRODUCTS_API
    const navigate=useNavigate()
    const checkLogin = (data)=>{
        console.log("Form data",data)
        axios.post(`${apiUrl}/users/login`,data)
        .then(response=>{
            console.log(response.data)
            onLogin()
            navigate('/products')
            // alert("Login successfull")
        })
        .catch((error)=>console.log(error));
        
    }

    return (
        <div className="login-container container">
          <h2 className="login-title">Login Form</h2>
          <form onSubmit={handleSubmit(checkLogin)} className="login-form">
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
    
            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
    
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary login-submit">
              Login
            </button>
          </form>
        </div>
      );
}

export default Login