// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">       
//        <span>Anurag Sontakke</span>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Header from './components/header';
import './App.css';


function App() {
  return (
    <Router>
       <Header/>
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
