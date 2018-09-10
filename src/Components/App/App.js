import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { firebaseLogin } from '../../thunks/Auth';

import './App.css';
import {Header} from '../Header/Header';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

// App.propTypes = {
//   firebaseLogin: PropTypes.func
// };

// export const mapDispatchToProps = dispatch => ({
//   firebaseLogin: () => dispatch(firebaseLogin())
// });

// export default connect(null, mapDispatchToProps)(App);