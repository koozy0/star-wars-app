import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import store from './store';
import './index.css';

render(<Root store={store} />, document.getElementById('root'));
