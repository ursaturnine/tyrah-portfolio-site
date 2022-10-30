import './App.css';
import {Outlet} from 'react-router-dom';
import NavBar from '../src/components/navbar';



function App() {  
  return (
    <div>
    <div className="App">
      <h1>Cloud Tyrah</h1>
    </div>
      <Outlet/>
    </div>
  );
}

export default App;
