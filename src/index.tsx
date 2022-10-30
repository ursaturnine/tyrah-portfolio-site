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
          <Route path='/' element={<App />}>
            <Route index element={<Home />}/>
            <Route path='about' element ={<About />}/>
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact /> }/>
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
      ,rootElement
);
