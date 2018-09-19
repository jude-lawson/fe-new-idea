import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Contributions from '../../Components/Contributions/Contributions';
import { getIdeaById } from '../../thunks/getIdea';
import { GridLoader } from 'halogenium';
import placeholder from '../../images/place-holder.png';
import { history } from '../../router/Router';

import './Idea.css';

export class Idea extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      id: window.location.pathname.replace(/\D+/g, ''),
      contributions: []
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });

    await this.getIdeaByIdFromDb();
    this.getContributionsById();
    this.setState({ loading: false });
  }

  getIdeaByIdFromDb = async () => {
    const id = this.state.id;
    await this.props.getIdeaById(id);
  }

  getContributionsById = () => {
    const contributions = this.props.idea.contributions;
    this.setState({ contributions });
  }

  render() {
    const { loading, contributions } = this.state;
    const { idea } = this.props;

    if (loading) {
      return (
        <div className="app-container">
          <div className="loader-wrapper">
            <GridLoader />
          </div>
        </div>
      );
    }

    return (
      <section className="app-container">
        {idea &&
        <React.Fragment>
          <article className="idea-container">
            <div className="idea-button--container">
              <button className="btn-grad blue-btn" onClick={() => history.goBack()} >&larr; Back</button>
              <button className="btn-grad btn-small blue-btn"><Link to="/ideaform">New Idea &rarr;</Link></button>
            </div>
            <div className="idea">
              <h2 className="idea-title">{idea.title}</h2>
              <p className="idea-author">
                <span className="idea-image">
                  <img
                    src={idea.author.profile_pic_url ? idea.author.profile_pic_url : placeholder}
                    alt={idea.author.username}/>
                </span>
                {idea.author ? idea.author.username : null}
              </p>
              <p className="idea-content">{idea.body}</p>
            </div>
          </article>
          <Contributions contributions={contributions} />
        </React.Fragment>
        }
      </section>
    );
  }
}

Idea.propTypes = {
  idea: PropTypes.object,
  getIdeaById: PropTypes.func
};

export const mapStateToProps = state => ({
  idea: state.idea
});

export const mapDispatchToProps = dispatch => ({
  getIdeaById: id => dispatch(getIdeaById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Idea);
