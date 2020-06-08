import React from 'react';
import { ReactComponent as Mb } from '../../../assets/images/protocol.svg';
import user from '../../../assets/images/user.jpg';

const Profiles = () => {
  return (
    <section className='user'>
      <div className='user__pic-box mb-small'>
        <Mb className='user__protocol' />
        <img src={user} alt='user' className='user__pic' />
      </div>

      <div className='user__id-box mb-small'>
        <div className='user__id user__info'>
          <div>Record ID</div>
          <span>96465476689</span>
        </div>
        <div className='user__id-type user__info'>
          <div>Record Type</div>
          <span>Not applicable</span>
        </div>
      </div>

      <div className='user__info-box mb-small'>
        <div className='user__name user__info'>
          <div>Name</div>
          <span>Jane Doe</span>
        </div>
        <div className='user__total-builds user__info'>
          <div>Total Builds</div>
          <span>12</span>
        </div>
        <div className='user__total-upvotes user__info'>
          <div>Total Upvotes</div>
          <span>45</span>
        </div>
        <div className='user__allias user__info'>
          <div>Allias</div>
          <span>V</span>
        </div>
        <div className='user__date user__info'>
          <div>Created On</div>
          <span>12.4.20</span>
        </div>
        <div className='user__email user__info'>
          <div>Email</div>
          <span>Not authorized</span>
        </div>
        <div className='user__followers user__info'>
          <div>Followers</div>
          <span>3</span>
        </div>
        <div className='user__following user__info'>
          <div>Following</div>
          <span>4</span>
        </div>
      </div>

      <div className='user__id-box'>
        <div className='user__edit'>View Submitted Builds</div>
        <div className='user__edit'>View Favorite Builds</div>
      </div>
    </section>
  );
};

export default Profiles;
