import './App.css';

import Footer from './components/footer/Footer';
import UpperNav from './components/upperNav/UpperNav';
import Navbar from './components/navbar/Navbar';
import Events from './components/events/Events';
import Home from './components/home/Home';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';

import {  BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main className='container'>
        <UpperNav />
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={  <About /> } />
            <Route path="/events" element={ <Events /> } />
            <Route path="/contacts" element={ <Contacts /> } />
        </Routes>
        <Footer />
     </main>
    </BrowserRouter>
   
  );
}

export default App;
