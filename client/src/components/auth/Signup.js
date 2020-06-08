import React from 'react';

const Signup = () => {
  return (
    <section>
      <h2 className='heading-section'>Signup</h2>
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
        <input
          type='password'
          className='form-sci-fi__input'
          placeholder='Choose a Password'
          required
        />
        <input
          type='password'
          className='form-sci-fi__input'
          placeholder='Confirm Password'
          required
        />
        <input type='submit' value='Signup' />
      </form>
      <div className='flex-center'>
        <a href='#!' className='form__link'>
          Already have an account?
        </a>
      </div>
    </section>
  );
};

export default Signup;
