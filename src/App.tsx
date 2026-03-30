import React from 'react';

// Layout Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Section Components
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Treatments from './components/Treatments/Treatments';
import Results from './components/Results/Results';
import Testimonials from './components/Testimonials/Testimonials';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';

// Component Styles
import './components/Layout/Navbar.css';
import './components/Layout/Footer.css';
import './components/Hero/Hero.css';
import './components/Services/Services.css';
import './components/About/About.css';
import './components/Treatments/Treatments.css';
import './components/Results/Results.css';
import './components/Testimonials/Testimonials.css';
import './components/Booking/Booking.css';
import './components/Contact/Contact.css';
import './components/UI/Button.css';
import './components/UI/SectionHeader.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Full screen intro */}
        <Hero />
        
        {/* Services Section - Treatment offerings grid */}
        <Services />
        
        {/* About Section - Trust building */}
        <About />
        
        {/* Featured Treatments - Detailed showcases */}
        <Treatments />
        
        {/* Results Section - Gallery/Social proof */}
        <Results />
        
        {/* Testimonials Section - Client reviews */}
        <Testimonials />
        
        {/* Booking CTA Section - Conversion focused */}
        <Booking />
        
        {/* Contact Section - Form and info */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
