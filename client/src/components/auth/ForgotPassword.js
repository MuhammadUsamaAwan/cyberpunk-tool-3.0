import React from 'react';

const ForgotPassword = () => {
  return (
    <section>
      <h2 className='heading-section'>Forgot Password?</h2>
      <form className='form-sci-fi form-sci-fi--block mb-small'>
        <input
          type='email'
          className='form-sci-fi__input'
          placeholder='Enter Your Email'
          required
        />
        <input type='submit' value='Send' />
      </form>
    </section>
  );
};

export default ForgotPassword;
