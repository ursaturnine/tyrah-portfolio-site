import React from 'react';
// import ReactDOM from 'react-dom/client';
import '../src/styles/index.css'
import App from './App';
import {render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../src/pages/home';
import About from '../src/pages/about';
import Projects from '../src/pages/projects';
import Contact from '../src/pages/contact';
import NotFound from '../src/pages/notfound';


// const root = ReactDOM.createRoot(
  const rootElement = document.getElementById('root') as HTMLElement
  render(
  // document.getElementById('root') as HTMLElement
// );
// root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App title='Tyrah D. Gullette'/>}>
            <Route index element ={<Home title='home' />} />
            <Route path='about' element ={<About title='About Tyrah'/>}/>
            <Route path='projects' element={<Projects title='My Projects'/>} />
            <Route path='contact' element={<Contact title='Contact Tyrah' /> }/>
            <Route path='*' element={<NotFound message='Hmm...it looks like this page does not exist' />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
      ,rootElement
);
