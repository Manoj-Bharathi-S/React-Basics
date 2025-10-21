import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar';
import Course from './Course';
import Footer from './Footer';
function App() {

  return (
    <>
      <Navbar/>
      <Course/>
      <Footer/>
    </>
  );
}

export default App
