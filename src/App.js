import './App.css';
import $ from 'jquery';
import CommentComponent from './components/CommentComponent/CommentComponent.js';
import ConfirmationDeleteComponent from './components/ConfirmationDeleteComponent/ConfirmationDeleteComponent.js'

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
      <ConfirmationDeleteComponent/>
    </div>
  );
}

export default App;
