import { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Commemorative from './components/Commemorative';

// Lazy loading for performance
const ChatBot = lazy(() => import('./components/ChatBot'));
const Blog = lazy(() => import('./components/Blog'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary-dark)]"></div>
  </div>
);

function App() {
  const [showChatBot, setShowChatBot] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Add keyboard accessibility for chat button
  const handleChatToggle = (e) => {
    if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
      e.preventDefault();
      setShowChatBot(!showChatBot);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[var(--primary-dark)] mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Carregando MRVG Advogados...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="font-['Inter'] text-[var(--text-primary)] bg-white min-h-screen antialiased">
      <Header isScrolled={isScrolled} />
      
      <main role="main">
        <Hero />
        <About />
        <Services />
        <Commemorative />
        <Team />
        
        <Suspense fallback={<LoadingSpinner />}>
          <Blog />
        </Suspense>
        
        <Contact />
      </main>
      
      <Footer />
      
      {/* Floating Action Button - Chat Bot */}
      <button
        onClick={handleChatToggle}
        onKeyDown={handleChatToggle}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--primary-light)]/20"
        aria-label={showChatBot ? 'Fechar assistente virtual' : 'Abrir assistente virtual'}
        aria-expanded={showChatBot}
        tabIndex={0}
      >
        <div className="relative">
          {showChatBot ? (
            <i className="fas fa-times text-lg transition-transform duration-200 group-hover:rotate-90"></i>
          ) : (
            <i className="fas fa-comment text-lg transition-transform duration-200 group-hover:scale-110"></i>
          )}
          
          {/* Notification dot when not active */}
          {!showChatBot && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--secondary-gold)] rounded-full animate-pulse"></span>
          )}
        </div>
      </button>
      
      {/* Chat Bot Component */}
      {showChatBot && (
        <Suspense fallback={<LoadingSpinner />}>
          <ChatBot onClose={() => setShowChatBot(false)} />
        </Suspense>
      )}
      
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--primary-dark)] text-white px-4 py-2 rounded-md z-50"
      >
        Pular para o conteúdo principal
      </a>
    </div>
  );
}

export default App;
