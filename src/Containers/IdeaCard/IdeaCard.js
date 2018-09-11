import React from 'react';
import './IdeaCard.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export const IdeaCard = (props) => {
  const {title, body} = props;
  console.log(props)
  return (
    <article>
      <button>REMOVE</button>
      <h1>{title}</h1>
      <p>{body}</p>

    </article>
  );
};

IdeaCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export const mapStateToProps = (state) => ({
  ideas: state.ideas
});

export default connect(mapStateToProps)(IdeaCard);