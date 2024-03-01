import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header-top'>
        <div>
        <button> Overview Page </button>
        </div>
        <div>
          <p> Salom </p>
          <img src="" alt="" />
          <p> Salom </p>

          <img src="" alt="" />
          <p> Salom </p>

          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <button> Free Download</button>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
