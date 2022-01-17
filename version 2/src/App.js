import './App.css';

import Footer from './components/footer/Footer';
import UpperNav from './components/upperNav/UpperNav';
import Navbar from './components/navbar/Navbar';
import Events from './components/events/Events';
import Home from './components/home/Home';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import EventDetail from './components/events/EventDetail';
import Admin from './components/admin/Admin';
import Register from './components/register/register';
import Login from './components/login/iogin';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <main className='container'>
        <UpperNav />
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>

  );
}

export default App;
