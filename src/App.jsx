import React from 'react';
import './App.css';
import project from './Data'; 
import Card from './components/Card';
import Navbar from './components/Navbar';
import NotionCard from './components/NotionCard';
import assignments from './NotionData';

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

      <br /><br />

      <h2>Assignments</h2>
      {assignments.map((assignment) => (
        <NotionCard 
          key={assignment.id} title={assignment.title} category={assignment.category} img={assignment.img} desc={assignment.desc} link={assignment.link}
        />
      ))}

      <br /><br />
    </>
  );
}

export default App;
