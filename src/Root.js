import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import People from './components/People';
import Person from './components/Person';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Header />

      <div style={STYLES.container}>
        <div style={STYLES.contentWrapper}>
          <div style={{ ...STYLES.fade, ...STYLES.fadeTop }} />
          <Route exact path='/' component={People} />
          <Route path='/:person' component={Person} />
          <div style={{ ...STYLES.fade, ...STYLES.fadeBottom }} />
        </div>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;

const STYLES = {
  container: { margin: '20px' },
  contentWrapper: {
    maxWidth: '50em',
    margin: '0 auto',
  },
  fade: {
    left: '0',
    height: '40vh',
    pointerEvents: 'none',
    position: 'fixed',
    width: '100%',
    zIndex: '1',
  },
  fadeTop: {
    backgroundImage: 'linear-gradient(0deg, transparent, black 65%)',
    top: '0',
  },
  fadeBottom: {
    backgroundImage: 'linear-gradient(180deg, transparent, black 65%)',
    bottom: '0',
  },
};
