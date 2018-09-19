import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../images/place-holder.png';

import './Contributions.css';

const Contributions = ({ contributions }) => {
  const renderContributions = contributions.map(contribution =>
    <div className="contribution" key={contribution.id}>
      <h2 className="idea-title">{contribution.title}</h2>
      <p className="idea-author">
        <span className="idea-image">
          <img
            src={contribution.author.profile_pic_url ?  contribution.author.profile_pic_url : placeholder}
            alt={contribution.author.username}
          />
        </span>
        {contribution.author ? contribution.author.username : null}
      </p>
      <p className="idea-content">{contribution.body}</p>
    </div>
  );

  return (
    <section className="contributions-container">
      {contributions.length ?
        <React.Fragment>
          <h2 className="contribution-title">Contributions</h2>
          {renderContributions}
        </React.Fragment> :
        <h2 className="contribution-title">No Contributions Yet</h2>
      }
    </section>
  );
};

Contributions.propTypes = {
  contributions: PropTypes.arrayOf(PropTypes.object)
};

export default Contributions;
