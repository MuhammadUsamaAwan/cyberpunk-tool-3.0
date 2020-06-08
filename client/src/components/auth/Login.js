import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section>
      <h2 className='heading-section'>Login</h2>
      <form className='form-sci-fi form-sci-fi--block mb-small'>
        <input
          type='text'
          className='form-sci-fi__input'
          placeholder='Enter Your Name'
          required
        />
        <input
          type='email'
          className='form-sci-fi__input'
          placeholder='Enter Your Email'
          required
        />
        <input type='submit' value='Login' />
      </form>
      <div className='flex-center'>
        <Link to='/signup' className='form__link'>
          Don't have an account?
        </Link>
      </div>
      <div className='flex-center'>
        <Link to='/forgotpassword' className='form__link'>
          Forgot Password?
        </Link>
      </div>
    </section>
  );
};

export default Login;
