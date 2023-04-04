import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Business } from './components/Business';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';

export const App = () => (
  <div className="bg-primary w-full text-white overflow-hidden">
    <Navbar />
    <Hero />
    <Business />
    <Testimonials />
    <Clients /> 
    <Cta />
    <Footer />
  </div>
);

