import Button from './components/Button';
import './style.css';
// import { useState } from "react";

function App() {
  return (
    <>
      <header className="header">
        <input className='input' />
        <div className='task-buttons'>
          <Button text='Create' />
          <Button text='Clear' />
        </div>
      </header>


    </>
  );
}
export default App;
