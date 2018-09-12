import React from 'react';
import './IdeaCard.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export const IdeaCard = (props) => {
  const {title, body} = props;
  return (
    <article>
      <button>REMOVE</button>
      <h1>{title}</h1>
      <p>{body}</p>
      <button>COMMENT</button>

    </article>
  );
};

IdeaCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};
