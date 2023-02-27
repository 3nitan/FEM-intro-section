import { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
