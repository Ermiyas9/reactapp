import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage.js'; 
import AboutMePage from './components/AboutMe.js';
import DoggoPage from './components/Doggo.js';
import WorkExpriencePage from './components/WorkExprience.js';
import HobbiesPage from './components/Hobbies.js';
import ProjectsPage from './components/Projects.js';
import MenuLists from './components/ListOfMenu'; 


//import { AnimatedOnScroll } from "react-animated-css-onscroll";

// Create a Layout component where useLocation() can be used
function Layout() {
  const location = useLocation();

  // Set a default background color
  let backgroundColor = '#FFD470'; 

  // Change background color based on the current page or routtee
  switch (location.pathname) 
  {
    case '/':
      backgroundColor = '#FFD470'; 
      break;

    case '/AboutMe':
      backgroundColor = '#FCDCF1'; 
    
      break;

    case '/Doggo':
      backgroundColor = '#78ABEE'; 
      break

    case '/WorkExprience':
      backgroundColor = '#C6B1F3'; 
      break;

    case '/Hobbies':
      backgroundColor = '#F4B8B8'; 
      break;

    case '/Projects':
      backgroundColor = '#A5F5DA'; 
      break;

    case '/menu':
      backgroundColor ='#7CBAA6'
      break;

    default:
      backgroundColor =  '#E8F9FB'; 
      break;
  }

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<AboutMePage />} />
        <Route path="/Doggo" element={<DoggoPage/>} />
        <Route path="/WorkExprience" element={<WorkExpriencePage/>} />
        <Route path="/Hobbies" element={<HobbiesPage/>} />
        <Route path="/Projects" element={<ProjectsPage/>} />
        <Route path="/menu" element={<MenuLists />} /> 
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
