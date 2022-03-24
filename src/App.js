import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Illustrations from './components/illustrations/Illustrations';
import Sidebar from './components/sidebar/Sidebar';
import { BiMenu } from 'react-icons/bi';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])
  
  const isDesktop = width > 844;

  const [showSideBar, setshowSideBar] = useState(isDesktop);

  const toggleSideBar = () => {
    setshowSideBar(!showSideBar)
  }

  return (
    <div className="App" data-testid='App'>
      <BrowserRouter>
        <BiMenu color='white' className='menu' onClick={() => {toggleSideBar()}} />
        <Sidebar showSideBar={ showSideBar } />
        <Routes>
          <Route path='/' exact element={<Illustrations />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
