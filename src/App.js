import './App.css';
import Header from './Header';
import $ from 'jquery';

function App() {
  $.get('localhost:2000/DM3H7P',  // url
      function (data, textStatus, jqXHR) {  // success callback
          alert('status: ' + textStatus + ', data:' + data);
  });
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
