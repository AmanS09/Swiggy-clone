import React, { useState } from 'react'
import background from "./Images/back.jpg";
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {

    const[values, setValues]=useState({
        name: '',
        number: '',
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
        if(errors.name === "" && errors.number === "" && errors.email === "" && errors.password === "" ){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
}    

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundImage: `url(${background})` }}>
    <div className='bg-white p-3 rounded w-25'>
        <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder='Enter Your Name' name='name'
                onChange={handleInput} className='form-control rounded-0 mt-2'/>
                {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="number"><strong>Phone Number</strong></label>
                <input type="number" placeholder='Enter Your Phone Number' name='number'
                onChange={handleInput} className='form-control rounded-0 mt-2'/>
                {errors.number && <span className='text-danger'>{errors.number}</span>}
            </div>
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
            <button className='btn btn-success w-100 rounded-0'><strong>Sign Up</strong></button>
            <p>By Signing Up you are agreeing to our Terms and Conditions</p>
            <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
    </div>
</div>
  )
}

export default Signup
