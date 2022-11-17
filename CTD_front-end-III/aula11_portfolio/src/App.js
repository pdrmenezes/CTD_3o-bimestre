import React from 'react';
import './style.css';
import Header from './components/01_Header';
import Hero from './components/02_Hero';
import Projects from './components/03_Projects';

export default function App() {

  return (
    <div className='App'>
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}
