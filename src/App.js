import './App.css';
import React, { useState } from "react";
import axios from "axios";
import CommentComponent from './components/CommentComponent/CommentComponent.js';
import ConfirmationDeleteComponent from './components/ConfirmationDeleteComponent/ConfirmationDeleteComponent.js'
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
    <div>
      <CommentComponent post={post} stateChanger={setPost} />
    </div>
  );
}

export default App;