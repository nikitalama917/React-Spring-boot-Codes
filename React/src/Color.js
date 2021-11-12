import logo from './logo.svg';
import './App.css'


function Color(props) {
 
  return (
    <div className="App">
      <header className="App-header">
        {props.Colorname}
      </header>
    </div>
  );
}

export default Color;
