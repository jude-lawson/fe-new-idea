import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import placeholder from '../../images/place-holder.png';
import CommentForm from '../../Containers/CommentForm/CommentForm';
import './Contributions.css';

export const Contributions = ({ contributions, hidden, toggleCommentForm, authenticated}) => {
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
            {authenticated && <button
              onClick={() => toggleCommentForm()}
              className="btn-grad btn-small blue-btn"
            >
            New Contribution
            </button>
            }
          </div>
          <CommentForm hidden={hidden}/>
          {renderContributions}
        </section> :
        <section className="contributions-container">
          <div className="contribution-header">
            <h2 className="contribution-title">No Contributions Yet</h2>
            {authenticated &&
              <button
                onClick={() => toggleCommentForm()}
                className="btn-grad btn-small blue-btn"
              >
              New Contribution
              </button>
            }
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
  toggleCommentForm: PropTypes.func,
  authenticated: PropTypes.string
};

export const mapStateToProps = state => ({
  authenticated: state.user.id
});

export default connect(mapStateToProps)(Contributions);
