import React from 'react';
import PropTypes from 'prop-types';

const Contributions = ({ contributions }) => {


  const renderContributions = contributions.map(contribution =>
    <div className="idea" key={contribution.id}>
      <h2 className="idea-title">{contribution.title}</h2>
      <p className="idea-author">
        <span className="idea-image">
          <img src={contribution.author.profile_pic_url} alt={contribution.author.username}/>
        </span>
        {contribution.author ? contribution.author.username : null}
      </p>
      <p className="idea-content">{contribution.body}</p>
    </div>
  );

  return (
    <React.Fragment>
      {renderContributions}
    </React.Fragment>
  );
};

Contributions.propTypes = {
  contributions: PropTypes.arrayOf(PropTypes.object)
};

export default Contributions;
