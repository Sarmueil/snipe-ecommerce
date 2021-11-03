
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import NewProductPage from './Components/NewProductPage/NewProductPage';
import WomenIntro from './Components/WomenIntro/WomenIntro';
import WomenProductPage from './Components/WomenProductPage/WomenProductPage';
import MenIntro from './Components/MenIntro/MenIntro';
import MenProductPage from './Components/MenProductPage/MenProductPage';
import KidsIntro from './Components/KidsIntro/KidsIntro'
import KidsProductPage from './Components/KidsProductPage/KidsProductPage'; 


function App() {
  return (
    <BrowserRouter>
       <div className="app">
    <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/new" element={<NewProductPage />}/>
        <Route path="/women" element={<WomenIntro />}/>  
        <Route path="/womenProducts" element={<WomenProductPage />}/>
        <Route path="/men" element={<MenIntro />}/>
        <Route path="/menProducts" element={<MenProductPage />}/>
        <Route path="/kids" element={<KidsIntro />}/>
        <Route path="/kidsProducts" element={<KidsProductPage />}/>
    </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;