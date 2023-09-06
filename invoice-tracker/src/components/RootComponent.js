import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import SignInComponent from './SignInComponent';

class RootComponent extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path="/signin" element={ <SignInComponent /> } />
        </Routes>
      </Router>
    );
  }
}

export default RootComponent;
