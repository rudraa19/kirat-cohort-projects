import React from 'react';
import './App.css';
import project from './Data'; // Make sure the path is correct
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <h2>Projects</h2>
      {project.map((proj) => (
        <Card 
          key={proj.id} title={proj.title} category={proj.category} img={proj.img} desc={proj.desc} github={proj.github} link={proj.link}
        />
      ))}
    </>
  );
}

export default App;
