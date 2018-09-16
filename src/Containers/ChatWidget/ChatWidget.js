import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './ChatWidget.css';

export class ChatWidget extends Component {
  componentDidMount = () => {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = message => {
    console.log(message);
    addResponseMessage(message);
  }

  render() {
    const { user } = this.props;

    return (
      <Widget
        handleNewUserMessage={this.handleNewUserMessage}
        title="New Idea"
        profileAvatar={user ? user.image : null}
        subtitle="Tell me about your new Idea"
      />
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ChatWidget);