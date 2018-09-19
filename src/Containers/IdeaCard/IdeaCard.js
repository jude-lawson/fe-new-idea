import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './IdeaCard.css';

export const IdeaCard = ({ ideas }) => {
  const renderIdeaCard = ideas.map(idea =>
    <Link className="idea--card-link scale-up-hor-left" to={`/idea/${idea.id}`} key={idea.id} >
      <article className="idea--card-container">
        <h1 className="idea--card-title">{idea.title}</h1>
        <p className="idea--card-body">{idea.body}</p>
      </article>
    </Link>
  );

  return (
    <React.Fragment>
      {ideas.length ? renderIdeaCard : null}
    </React.Fragment>
  );
};

IdeaCard.propTypes = {
  ideas: PropTypes.arrayOf(PropTypes.object)
};
