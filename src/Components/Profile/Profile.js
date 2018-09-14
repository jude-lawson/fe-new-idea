import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Profile extends Component {

  render() {
    const { user } = this.props;
    return (
      <section>
        {console.log(user)}
      </section>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
