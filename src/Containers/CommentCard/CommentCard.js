import React from 'react';
import PropTypes from 'prop-types';

export const CommentCard = (props) => {
  const {body} = props;
  return (
    <article>
      <button>REMOVE</button>
      <p>{body}</p>
      <button>COMMENT</button>
    </article>
  );
};

CommentCard.propTypes = {
  body: PropTypes.string
};