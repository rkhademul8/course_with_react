import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />}/>
      
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
