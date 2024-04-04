import './App.css';
import {React, Route, Routes } from 'react-router-dom';
import Body from './components/body/Body.js';
import Nav from './components/nav/Nav.js';
import Footer from './components/footer/Footer.js';


function App() {
  return (
    <div className="App">
    <Nav />
    <Body/>
    <Footer />
    {/* <Routes>
      <Route path='/' element={<Component />} />
    </Routes>  */}
  </div>
  );
}

export default App;
