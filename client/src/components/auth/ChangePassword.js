import React from 'react';

const ChangePassword = () => {
  return (
    <section>
      <h2 className='heading-section'>Change Password</h2>
      <form className='form-sci-fi form-sci-fi--block mb-small'>
        <input
          type='password'
          className='form-sci-fi__input'
          placeholder='Enter Your Current Password'
          required
        />
        <input
          type='password'
          className='form-sci-fi__input'
          placeholder='Choose Your New Password'
          required
        />
        <input
          type='password'
          className='form-sci-fi__input'
          placeholder='Confirm New Password'
          required
        />
        <input type='submit' value='Change Password' />
      </form>
    </section>
  );
};

export default ChangePassword;
