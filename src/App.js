import { AnimatePresence } from 'framer-motion';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <HashRouter>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}
