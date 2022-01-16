import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentComponent from './components/CommentComponent/CommentComponent.js';
import ConfirmationDeleteComponent from './components/ConfirmationDeleteComponent/ConfirmationDeleteComponent.js'
import RobotCheckComponent from './components/RobotCheckComponent/RobotCheckComponent.js'
import Logo from './assets/logo.png';


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
    <div>
      <CommentComponent post={post} stateChanger={setPost} />
      <br></br>
      <RobotCheckComponent />
    </div>
  );
}

export default App;