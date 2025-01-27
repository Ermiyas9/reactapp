import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../App.css';
import AboutMePage from '../AboutMe'; 
import HomePage from '../HomePage'; 
import DoggoPage from '../Doggo'; 
import HobbiesPage from './Hobbies';
import ProjectsPage from './Projects';
import WorkExpriencePage from './WorkExprience';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home page as the default route */}

        <Route path="/" element={<HomePage />} /> 

        {/* Route for About Me page */}
        <Route path="../AboutMe" element={<AboutMePage />} /> 

         {/* Route for About Me page */}
         <Route path="../Doggo" element={<DoggoPage/>} /> 

             {/* Home page as the default route */}
        <Route path="../WorkExprience" element={<WorkExpriencePage />} /> 

        {/* Route for Projects page */}
        <Route path="../Projects" element={<ProjectsPage/>} /> 

        {/* Route for Hobbies page */}
        <Route path="../Hobbies" element={<HobbiesPage />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
