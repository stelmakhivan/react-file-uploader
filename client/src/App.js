import React from 'react';
import './App.css';
import { hot } from 'react-hot-loader/root';

import FileUpload from './components/FileUpload';

const App = () => (
  <div className="container mt-4">
    <h4 className="display-4 text-center mb-4">
      <i className="fab fa-react" /> React File Upload
    </h4>

    <FileUpload />
  </div>
);

export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
