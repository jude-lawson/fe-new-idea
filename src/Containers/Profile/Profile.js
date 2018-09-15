import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';

import './Profile.css';

export class Profile extends Component {

  render() {
    let { user } = this.props;
    user.name = 'Andrew James';
    const userCardStyles = {
      background: `no-repeat url('https://avatars3.githubusercontent.com/u/13269277?v=4') `,
      backgroundPosition: 'center center',
      height: '50vh'
    };

    return (
      <div>
        <Header />
        <section className="app-container">
          {user &&
            <div className="profile-card" style={userCardStyles}>
              <div className="profile-card__user">
                <h2>{user.name}</h2>
              </div>
            </div>
          }
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
