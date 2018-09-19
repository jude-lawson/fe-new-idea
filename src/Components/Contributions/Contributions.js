import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../images/place-holder.png';
import CommentForm from '../../Containers/CommentForm/CommentForm';
import './Contributions.css';

const Contributions = ({ contributions, hidden, toggleCommentForm }) => {
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
    <React.Fragment>
      {contributions.length ?
        <section className="contributions-container">
          <div className="contribution-header">
            <h2 className="contribution-title">Contributions</h2>
            <button
              onClick={() => toggleCommentForm()}
              className="btn-grad btn-small blue-btn"
            >
            New Contribution
            </button>
          </div>
          <CommentForm hidden={hidden}/>
          {renderContributions}
        </section> :
        <section className="contributions-container">
          <div className="contribution-header">
            <h2 className="contribution-title">No Contributions Yet</h2>
            <button
              onClick={() => toggleCommentForm()}
              className="btn-grad btn-small blue-btn"
            >
            New Contribution
            </button>
          </div>
          <CommentForm hidden={hidden}/>
        </section>
      }
    </React.Fragment>
  );
};

Contributions.propTypes = {
  contributions: PropTypes.arrayOf(PropTypes.object),
  hidden: PropTypes.bool,
  toggleCommentForm: PropTypes.func
};

export default Contributions;
