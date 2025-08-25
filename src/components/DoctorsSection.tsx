import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import DoctorCard from './DoctorCard';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import doctor1 from '@/assets/doctor-1.jpg';
import doctor2 from '@/assets/doctor-2.jpg';
import doctor3 from '@/assets/doctor-3.jpg';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  experience: string;
  availability: string;
  location: string;
  consultationFee: string;
  languages: string[];
}

const DoctorsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Tous');

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      specialty: 'Médecine Générale',
      image: doctor1,
      rating: 4.8,
      experience: '12 ans',
      availability: 'Disponible Aujourd\'hui',
      location: 'Centre Médical Centre-Ville',
      consultationFee: '85€',
      languages: ['Français', 'Mandarin', 'Espagnol']
    },
    {
      id: '2',
      name: 'Dr. Miguel Rodriguez',
      specialty: 'Cardiologie',
      image: doctor2,
      rating: 4.9,
      experience: '15 ans',
      availability: 'Disponible Demain',
      location: 'Institut de Cardiologie',
      consultationFee: '120€',
      languages: ['Français', 'Espagnol']
    },
    {
      id: '3',
      name: 'Dr. Amara Johnson',
      specialty: 'Pédiatrie',
      image: doctor3,
      rating: 4.7,
      experience: '8 ans',
      availability: 'Disponible Aujourd\'hui',
      location: 'Centre de Santé Pédiatrique',
      consultationFee: '95€',
      languages: ['Français', 'Anglais']
    }
  ];

  const specialties = ['Tous', 'Médecine Générale', 'Cardiologie', 'Pédiatrie', 'Dermatologie', 'Orthopédie'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'Tous' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleBookAppointment = (doctorId: string) => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="doctors" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Rencontrez Nos <span className="gradient-text">Médecins</span> Experts
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Notre équipe de professionnels de santé expérimentés se dédie à vous fournir 
            des soins médicaux de la plus haute qualité.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher par nom de médecin ou spécialité..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 border-accent/20 focus:ring-accent"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "default" : "outline"}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`whitespace-nowrap ${
                  selectedSpecialty === specialty 
                    ? 'btn-medical-primary text-white' 
                    : 'border-accent/30 text-accent hover:bg-accent hover:text-white'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {specialty}
              </Button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <DoctorCard
                {...doctor}
                onBookAppointment={handleBookAppointment}
              />
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Aucun médecin trouvé correspondant à vos critères de recherche.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('Tous');
              }}
              variant="outline"
              className="mt-4"
            >
              Effacer les Filtres
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {filteredDoctors.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
              Voir Plus de Médecins
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsSection;