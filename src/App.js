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

      <main>
        <h1> Start Bootstrap  </h1>
        <div>
        <a> Home </a>
        <a> About </a>
        <select name="" id="">
          <option value=""> All Products </option>
          <hr></hr>
          <option value="1"> Poular Items</option>
          <option value="2"> New Arrivals</option>

        </select>
        </div>
        <div>
          <img src= {Github} alt="" />
          <a> Cart </a>
          <a> O </a>``
        </div>
        </main>
    </div>
  );
}

export default App;
