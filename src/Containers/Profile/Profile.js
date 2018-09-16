import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Profile.css';

export class Profile extends Component {

  render() {
    const { user } = this.props;
    const userCardStyles = {
      background: `no-repeat url(${user.image}) center center`,
      height: '50vh'
    };

    return (
      <div>
        {user.id &&
            <div className="profile-card" style={userCardStyles}>
              <div className="profile-card__user">
                <h2>{user.name}</h2>
              </div>
            </div>
        }
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
