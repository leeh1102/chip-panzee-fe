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
    const response = await axios.get("http://localhost:2000/URHCFL?passcode=asdddd");
    setPost(response.data);
  }
  return (
    <div className="App">
      <PostDetailComponent post={post} setPost={setPost}/>
      <header>
        <img src={Logo} alt='Chippin Logo' id='logo' />
      </header>
      {/* <PostDetailComponent post={post} setPost={setPost}/> */}
      <PostCreateComponent />
    </div>
  );
}

export default App;