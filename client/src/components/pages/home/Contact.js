import React from 'react';
import { ReactComponent as Mb } from '../../../assets/images/mb.svg';

const Contact = () => {
  return (
    <section className='section-contact'>
      <div className='heading-secondary ml-small'>
        <h2>Contact</h2>
        <Mb className='heading-secondary-mb heading-secondary-mb--contact' />
      </div>

      <form className='form-contact'>
        <h3 className='form-contact__heading'>Leave Your Feedback!</h3>

        <div>
          <div className='form-contact__group mb-small'>
            <input
              className='form-contact__input'
              type='email'
              id='email'
              placeholder='Enter your email address'
              required
            />
          </div>

          <div className='form-contact__group'>
            <input
              className='form-contact__input'
              id='message'
              type='text'
              placeholder='Enter your message'
              required
            />
          </div>
        </div>

        <div className='form-contact__group'>
          <input
            type='submit'
            value='submit'
            className='form-contact__submit'
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
