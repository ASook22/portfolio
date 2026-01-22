// src/App.jsx  ← no changes needed here
import { useState } from 'react';
import Navbar from './components/Navbar';   // keep if you have it separate
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}