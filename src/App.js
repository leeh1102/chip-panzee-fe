import './App.css';
import React from "react";
import PostDetailComponent from './components/PostDetailComponent/PostDetailComponent';
import PostCreateComponent from './components/PostCreateComponent/PostCreateComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/view/:id' element={<div className='App'><PostDetailComponent /></div>} />
          <Route exact path="/" element={<div className='App'><PostCreateComponent /></div>} />
        </Routes>
    </Router>

  );
}

export default App;