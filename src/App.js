import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostDetailComponent from './components/PostDetailComponent/PostDetailComponent';
import ConfirmationDeleteComponent from './components/ConfirmationDeleteComponent/ConfirmationDeleteComponent.js'
import RobotCheckComponent from './components/RobotCheckComponent/RobotCheckComponent.js'
import ShareBtnsComponent from './components/ShareBtnsComponent/ShareBtnsComponent.js'
import Logo from './assets/logo.png';
import PostCreateComponent from './components/PostCreateComponent/PostCreateComponent';


function App() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    getPost();
  }, []);
  async function getPost() {
    const response = await axios.get("http://localhost:2000/TDQ575");
    setPost(response.data);
  }
  return (
    <div className="App">
<<<<<<< HEAD
      <header>
        <img src={Logo} alt='Chippin Logo' id='logo' />
      </header>
      {/* <PostDetailComponent post={post} setPost={setPost}/> */}
      <PostCreateComponent />
=======
      {/* <PostDetailComponent post={post} setPost={setPost}/> */}
      <PostDetailComponent/>
>>>>>>> 9ed50c4fc8d49614cab921deeb5a852836aa9390
    </div>
  );
}

export default App;