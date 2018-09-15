import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';

export class Profile extends Component {

  render() {
    const { user } = this.props;
    return (
      <div>
        <Header />
        <section className="app-container">
          {console.log(user)}
        </section>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
