import React from 'react';
import user from '../../../assets/images/user.jpg';
import { ReactComponent as Mb } from '../../../assets/images/mb.svg';

const Comments = () => {
  return (
    <section className='comments'>
      {/* HEADING */}
      <div className='heading-secondary mb-small'>
        <h2>Comments</h2>
        <Mb className='heading-secondary-mb' />
      </div>

      {/* COMMENT POST */}
      <div className='comments__post mb-med'>
        <div>
          <img src={user} alt='user' className='comments__post__pic' />
          <div className='comments__post__name'>Jane Doe</div>
        </div>
        <form className='comments__post__form'>
          <textarea
            className='comments__post__form__input'
            placeholder='Your thoughts...'
          />
          <input
            type='submit'
            value='Post Comment'
            className='comments__post__form__submit'
          />
        </form>
      </div>

      {/* COMMENT AREA */}
      <div className='comments__area'>
        {/* ACTUAL COMMENT */}
        <div className='comment'>
          <div>
            <img src={user} alt='user' className='comment__pic' />
            <div className='comment__name'>Jane Doe</div>
            <div className='comment__date'>4 days ago</div>
          </div>
          <div className='comment__content'>
            <div className='comment__text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              iusto, aliquam pariatur sunt suscipit modi beatae corrupti magnam
              hic delectus.
            </div>
            <div className='comment__reply'>
              Reply&nbsp;
              <i className='fa fa-reply' />
            </div>
          </div>
        </div>

        {/* POST REPLY */}
        <div className='comments__post comments__post--reply mb-med'>
          <div>
            <img src={user} alt='user' className='comments__post__pic' />
            <div className='comments__post__name'>Jane Doe</div>
          </div>
          <form className='comments__post__form'>
            <textarea
              className='comments__post__form__input'
              placeholder='Reply...'
            />
            <input
              type='submit'
              value='Post Reply'
              className='comments__post__form__submit'
            />
          </form>
        </div>

        {/* ACTUAL REPLIES */}
        <div className='comment comment--reply'>
          <div>
            <img src={user} alt='user' className='comment__pic' />
            <div className='comment__name'>Jane Doe</div>
            <div className='comment__date'>4 days ago</div>
          </div>
          <div className='comment__content'>
            <div className='comment__text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              iusto, aliquam pariatur sunt suscipit modi beatae corrupti magnam
              hic delectus.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
