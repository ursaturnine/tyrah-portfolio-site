import '../src/styles/App.css';
import {Outlet} from 'react-router-dom';
import React, {FC, useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import HorizontalCard from './components/horizontalcard'
import {about} from '../src/blurbs/smallabout';
import PageSection from '../src/components/pagesection'


interface AppProps {
  title?: string
}


const App: FC<AppProps> = ({title}) => {  
  let messageOne = about.messageOne;
  let messageTwo = about.messageTwo;

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const mouseMove = (e: React.MouseEvent | any): void => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y -16
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: '#0a0a0a',
    }
  }
{/* <div className='header'>
            <h1 onMouseEnter={textEnter} onMouseLeave={textExit}>{title}</h1>
        </div> */}

  const textEnter = () => setCursorVariant('text');
  const textExit = () => setCursorVariant('default');
  return (
    <div className="App">
      <motion.div 
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      <div className='outlet'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
