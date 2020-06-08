import React from 'react';
import { ReactComponent as Mb } from '../../../assets/images/mb.svg';

const Features = () => {
  return (
    <section className='section-features'>
      <div className='heading-secondary mb-small'>
        <div className='heading-secondary'>
          <h2>Features</h2>
          <Mb className='heading-secondary-mb heading-secondary-mb--features' />
        </div>
      </div>
      <div className='features'>
        <div className='features__item features__item--craft'>
          <i className='fa fa-pencil features__item__icon'></i>
          <p className='features__item__text'>
            Create a perfect min-max character for Cyperpunk 2077 using our
            build creator and view your AR, defense rating among other active
            effects.
          </p>
        </div>
        <div className='features__item features__item--save'>
          <i className='fa fa-save features__item__icon'></i>
          <p className='features__item__text'>
            Save your build as private or save them as public.
          </p>
        </div>
        <div className='features__item features__item--share'>
          <i className='fa fa-share-alt features__item__icon'></i>
          <p className='features__item__text'>
            Share with your friend and community to get upvotes and feedback.
          </p>
        </div>
        <div className='features__item features__item--browse'>
          <i className='fa fa-book features__item__icon'></i>
          <p className='features__item__text'>
            Browse builds made by other people. Comment on them to get more
            insight.
          </p>
        </div>
        <div className='features__item features__item--favorite'>
          <i className='fa fa-thumbs-up features__item__icon'></i>
          <p className='features__item__text'>
            Upvote a build to add it to your favorites. Then view it later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
