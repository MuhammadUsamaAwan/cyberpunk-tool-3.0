import React from 'react';

const ResetPassword = () => {
  return (
    <section>
      <h2 className='heading-section'>Reset Password</h2>
      <form className='form-sci-fi form-sci-fi--block mb-small'>
        <input
          type='password'
          className='form-sci-fi__input'
          placeholder='Choose Your New Password'
          required
        />
        <input
          type='password'
          className='form-sci-fi__input'
          placeholder='Confirm Password'
          required
        />
        <input type='submit' value='Reset Password' />
      </form>
    </section>
  );
};

export default ResetPassword;
