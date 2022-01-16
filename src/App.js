import './App.css';
import React, { useState } from "react";
import axios from "axios";
import CommentComponent from './components/CommentComponent/CommentComponent.js';
import PostDetailComponent from './components/PostDetailComponent/PostDetailComponent';
import ConfirmationDeleteComponent from './components/ConfirmationDeleteComponent/ConfirmationDeleteComponent.js'
import RobotCheckComponent from './components/RobotCheckComponent/RobotCheckComponent.js'
import ShareBtnsComponent from './components/ShareBtnsComponent/ShareBtnsComponent.js'
import Logo from './assets/logo.png';


function App() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    getPost();
  }, []);
  async function getPost() {
    const response = await axios.get("http://localhost:2000/TDQ575");
    setPost(response.data);
  }
  return (
    <div className="App">
      {/* <PostDetailComponent/>
      <CommentComponent post={post} stateChanger={setPost} /> */}
      <ConfirmationDeleteComponent/>
      <RobotCheckComponent/>
      <ShareBtnsComponent/>
    </div>
  );
}

export default App;