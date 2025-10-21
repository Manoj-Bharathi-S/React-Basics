import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar';
import Course from './Course';
import Footer from './Footer';
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
function App() {

  return (
    <>
      <Course img={html} course="HTML" o_price="$ 499" n_price="$ 299" rating="4.5" show={false}/>
      <Course img={css} course="CSS" o_price="$ 299" n_price="$ 199" rating="3.9" show={true}/>
      <Course img={js} course="JavaScript" o_price="$ 299" n_price="$ 149" rating="4.2" show={true}/>
    </>
  );
}

export default App
