import React from "react";
import useLogin from "./useLogin";
import validateInfo from "./validateInfo";
import Navbar from "./components/Navbar";
import "./Login.css";

const Login = () => {
    const {handleChange, values, handleSubmit, errors} = useLogin(validateInfo);
    
    return(
        <div>
            <Navbar/>
            <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h1>
                    Welcome To Escapades
                </h1>
                <div className='login-input'>
                    <lable htmlFor='html' className='login-label'>
                        Username 
                    </lable>
                    <input id='username' type='text' name='username' className='login-text-input' placeholder='Enter your username' value={values.username} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='login-input'>
                    <lable htmlFor='html' className='login-label'>
                        Password 
                    </lable>
                    <input id='password' type='password' name='password' className='login-text-input' placeholder='Enter your password' value={values.password} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <button className='login-input-btn' type='submit'>Login</button>
                <span className='form-input-register'>Do not have Account? <a href='\register'>Register here</a></span>
            </form>
        </div>
        </div>
        
)
}

export default Login