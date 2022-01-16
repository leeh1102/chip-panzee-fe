import './App.css';
import Header from './Header';
import $ from 'jquery';

function App() {
  $.ajax({
    url: "http://localhost:2000/DM3H7P",
    type: "GET",
    crossDomain: true,
    dataType: "json",
    success: function (response) {
        console.log(response);
    },
    error: function (xhr, status) {
        alert("error");
    }
  });

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
