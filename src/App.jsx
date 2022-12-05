import { useState } from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { heroapi } from './data/data.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
      </main>
    </>
  )
}

export default App
