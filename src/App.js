import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PersonalInfo from './components/PersonalInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Professional Portfolio</h1>
      </header>
      <main>
        <Profile />
        <div className='profileDivision'>
            <div className='div1'>
              <Skills />
            </div>
            <div className='div2'>
                <Projects />
                <PersonalInfo />
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
