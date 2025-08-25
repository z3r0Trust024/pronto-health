import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DoctorsSection from '@/components/DoctorsSection';
import BookingForm from '@/components/BookingForm';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DoctorsSection />
        <SpecialtiesSection />
        <BookingForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;