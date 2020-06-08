import React from 'react';

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
        <a href='#!' className='form__link'>
          Don't have an account?
        </a>
      </div>
      <div className='flex-center'>
        <a href='#!' className='form__link'>
          Forgot Password?
        </a>
      </div>
    </section>
  );
};

export default Login;
