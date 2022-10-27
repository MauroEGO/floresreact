import logo from './logo.svg';
import './App.css';
import Button from './components/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text=" boton boton boton " onClick={()=> alert('click click click')}/>
        <Button text=" :| " onClick={()=> alert(':D')}/>
        <Button text=" 2x2 2+2 2² " onClick={()=> alert('4')}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
