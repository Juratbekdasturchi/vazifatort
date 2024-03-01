// import logo from './logo.svg';

// import Monitor from '../Rasmlar/Monitor.png';
import Phone from './Phone.png';
import Plansheet from './Plansheet.png';
import Monitor from "./Monitor.png";
import Github from "./github.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header-top'>
        <div>
          <p> Overview Page </p>
        </div>
        <div className='rasm'>
          <img src={Monitor} alt="" />
          <img src={Phone} alt="" />
          <img src={Plansheet} alt="" />
        </div>
        <div className='left'>
          <img src={Github} className='rasm1' alt="" />
          <button className='buttoncha'>Free Download</button>
        </div>
      </div>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

      </header>
      <main>
        <h1> Assalomu alaykum </h1>
        </main>
    </div>
  );
}

export default App;
