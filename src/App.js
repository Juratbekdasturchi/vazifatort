// import logo from './logo.svg';

import Monitor from '../Rasmlar/Monitor.png';
import Phone from '../Rasmlar/Phone.png';
import Plansheet from '../Rasmlar/Plansheet.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header-top'>
        <div>
          <button> Overview Page </button>
        </div>
        <div>
          <img src={Monitor} alt="" />
          <img src={Phone} alt="" />
          <img src={Plansheet} alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <button> Free Download</button>
        </div>
      </div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

      </header>
    </div>
  );
}

export default App;
