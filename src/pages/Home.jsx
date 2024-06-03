
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyList from '../components/PropertyList';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-6">Available Properties</h1>
        <PropertyList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
