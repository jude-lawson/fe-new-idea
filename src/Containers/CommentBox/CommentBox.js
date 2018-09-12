import React, { Component } from 'react';
import { CommentCard } from '../CommentCard/CommentCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class CommentBox extends Component {

  displayComments = () => {
    if (this.props.comments) {
      const displayedComments = this.props.comments.map((comment, index) => {
        return <CommentCard {...comment} key={index} />;
      });
      return displayedComments;
    }
  }

  render() {
    return (
      <main>
        {this.displayComments()}
      </main>
    );
  }
}

CommentBox.propTypes = {
  comments: PropTypes.array
};

export const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentBox);