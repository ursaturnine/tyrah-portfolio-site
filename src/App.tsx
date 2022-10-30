import '../src/styles/App.css';
import {Outlet} from 'react-router-dom';
import NavBar from '../src/components/navbar';



function App() {  
  return (
    <div className="App">
      <div className='header'>
        <h1>Cloud Tyrah</h1>
      </div>
      <div className='outlet'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
