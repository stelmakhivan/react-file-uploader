import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root';

const App = () => <div>App</div>;

export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
