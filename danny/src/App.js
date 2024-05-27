import './App.css';
import {React } from 'react-router-dom';
import Body from './components/body/Body.js';
import Nav from './components/nav/Nav.js';
import Footer from './components/carrusel/Carrusel.js';


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
