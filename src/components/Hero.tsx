import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Calendar, Shield } from 'lucide-react';
import heroImage from '@/assets/medical-hero.jpg';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDoctors = () => {
    const element = document.querySelector('#doctors');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Prenez RDV Médical
              <span className="gradient-text"> en Ligne </span>
              Facilement
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg text-balance">
              Connectez-vous avec des professionnels de santé qualifiés et planifiez vos 
              rendez-vous sans effort. Votre santé est notre priorité.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToDoctors}
                className="btn-medical-primary text-white font-medium px-8 py-3 text-lg hover-glow"
              >
                Trouver un Médecin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={scrollToBooking}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                Réserver Maintenant
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Disponible 24/7</p>
                  <p className="text-sm text-muted-foreground">Réservation en ligne</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full">
                  <Calendar className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Planification Facile</p>
                  <p className="text-sm text-muted-foreground">RDV rapides</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Sécurisé et Privé</p>
                  <p className="text-sm text-muted-foreground">Conforme RGPD</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="lg:flex justify-center items-center hidden">
            <div className="glass-card rounded-2xl p-8 animate-fade-up max-w-md">
              <h3 className="text-2xl font-bold text-primary mb-6">Excellence Médicale</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Médecins Inscrits</span>
                  <span className="text-2xl font-bold text-accent">150+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Patients Satisfaits</span>
                  <span className="text-2xl font-bold text-accent">5,000+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Spécialités Disponibles</span>
                  <span className="text-2xl font-bold text-accent">25+</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Taux de Réussite</span>
                  <span className="text-2xl font-bold text-accent">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;