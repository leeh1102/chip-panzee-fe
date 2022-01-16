import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/BobbyJonesSoft.otf';
import './fonts/Kollektif.ttf';
import './index.css';
import PostCreateComponent from './components/PostCreateComponent/PostCreateComponent.js';
import App from './App';
import RobotCheckComponent from './components/RobotCheckComponent/RobotCheckComponent.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);