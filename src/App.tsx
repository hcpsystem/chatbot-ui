import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
}

export default App;