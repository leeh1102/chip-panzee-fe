import './App.css';
import $ from 'jquery';
import CommentComponent from './components/CommentComponent/CommentComponent.js';
<<<<<<< HEAD
import ConfirmationDeleteComponent from './components/ConfirmationDeleteComponent/ConfirmationDeleteComponent.js'
=======
import Logo from './assets/logo.png';
>>>>>>> 77fd426e755a7bd886d0d6e9cc7f3a0d495a87cd

function App() {
  // $.ajax({
  //   url: "http://localhost:2000/DM3H7P",
  //   type: "GET",
  //   crossDomain: true,
  //   dataType: "json",
  //   success: function (response) {
  //       console.log(response);
  //   },
  //   error: function (xhr, status) {
  //       console.log("error");
  //   }
  // });

  return (
    <div className="App">
<<<<<<< HEAD
      <ConfirmationDeleteComponent/>
=======
      <header className="header-logo">
        <img className="img-logo" src={Logo} alt="Chippin Logo" />
      </header>
>>>>>>> 77fd426e755a7bd886d0d6e9cc7f3a0d495a87cd
    </div>
  );
}

export default App;
