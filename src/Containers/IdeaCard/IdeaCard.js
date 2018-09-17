import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './IdeaCard.css';

export const IdeaCard = (props) => {
  const {title, body} = props;
  return (
    <article className="idea--card-container">
      <button className="card--rmv-btn">REMOVE</button>
      <h1 className="idea--card-title">{title}</h1>
      <p className="idea--card-body">{body}</p>
      <button className="card--comment-btn">COMMENT</button>
    </article>
  );
};

IdeaCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};
