import './App.css';
import $ from 'jquery';
import Button from '@material-ui/core/Button';

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
        console.log("error");
    }
  });

  return (
    <div className="App">
      <Button variant="contained">你好，世界</Button>
    </div>
  );
}

export default App;
