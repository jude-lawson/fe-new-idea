import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from '../Header/Header';
import { getIdeaById } from '../../thunks/getIdea';

import './Idea.css';

export class Idea extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  componentDidMount = async () => {
    await this.getIdeaByIdFromDb();
  }

  getIdeaByIdFromDb = async () => {
    const id = window.location.pathname.replace(/\D+/g, '');
    this.setState({ loading: true });

    if (id) {
      await this.props.getIdeaById(id);
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    const { idea } = this.props;
    console.log(idea);
    if (loading) {
      return (
        <div className="app-container">
          <Header />
          <div className="idea-container">
            <h1>loading</h1>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Header />
        {idea &&
          <section className="app-container">
            <article className="idea-container">
              <Link to="/" >Back</Link>
              <h2 className="idea-title">{idea.title}</h2>
              <p>{idea.author ? idea.author.username : null}</p>
              <p className="idea-content">{idea.body}</p>
            </article>
          </section>
        }
      </div>
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
