import '../css/App.css';
import About from './About';
import Catalog from './Catalog';
import Category from './Category';
import Hero from './Hero';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
