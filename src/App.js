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
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from 'reactstrap';

function App() {
  const {  isLoading,isAuthenticated } = useAuth0();

  return (
    <Router>
       <Header/>
      
      <div className='main-content'>
        {isLoading ? <div className='d-flex justify-content-center align-items-center'><Spinner animation="border" /></div> : 
        <Routes>
          <Route exact path="/" element={<Home isLogin={isAuthenticated}/>} />
          <Route path="/about" element={<About isLogin={isAuthenticated}/>} />
          <Route path="/contact" element={<Contact isLogin={isAuthenticated}/>} />
        </Routes>
        }
      </div>
    </Router>
  );
}

export default App;
