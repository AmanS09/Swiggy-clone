import React, { useState } from 'react'
import background from "./Images/back.jpg";
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import './login.css'; 


function Login(){
    const[values, setValues]=useState({
        email: '',
        password: ''
    })
    
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput=(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === "" ){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                     navigate('/project/home');
                }else{
                    alert("No Record existed");
                }
            })
            .catch(err => console.log(err));
        }
}    

    return(
        <div className='login-box d-flex justify-content-center align-items-center vh-100' style={{ backgroundImage: `url(${background})` }}>
            <div className='login-container bg-light p-3 rounded w-25 '>
                <h2  style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', fontSize:'larger' }}><strong>Sign-In</strong></h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Your Email' name='email'
                         onChange={handleInput} className='form-control rounded-0 mt-2'/>
                         {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Your Password' name='password'
                         onChange={handleInput} className='form-control rounded-0 mt-2'/>
                         {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
                    <div className='Terms'>
                    <p>By Logging in you are agreeing to our Terms and Conditions</p>
                    </div>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
        
    )

}

export default Login