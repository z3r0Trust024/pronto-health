import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Heart, 
  Baby, 
  Bone, 
  Eye, 
  Brain, 
  Pill, 
  Shield, 
  Activity,
  Users,
  Zap,
  Microscope
} from 'lucide-react';

interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  doctorsCount: number;
  color: string;
}

const SpecialtiesSection = () => {
  const specialties: Specialty[] = [
    {
      id: '1',
      title: 'Médecine Générale',
      description: 'Soins de santé primaires complets pour tous les âges avec soins préventifs et bilans de routine.',
      icon: <Stethoscope className="h-8 w-8" />,
      doctorsCount: 25,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: '2',
      title: 'Cardiologie',
      description: 'Soins cardiaques experts incluant diagnostics, traitement et prévention des maladies cardiovasculaires.',
      icon: <Heart className="h-8 w-8" />,
      doctorsCount: 12,
      color: 'from-red-500 to-red-600'
    },
    {
      id: '3',
      title: 'Pédiatrie',
      description: 'Soins de santé spécialisés pour nourrissons, enfants et adolescents avec soins centrés sur la famille.',
      icon: <Baby className="h-8 w-8" />,
      doctorsCount: 15,
      color: 'from-green-500 to-green-600'
    },
    {
      id: '4',
      title: 'Orthopédie',
      description: 'Traitement des affections osseuses, articulaires et musculaires avec options chirurgicales et non-chirurgicales.',
      icon: <Bone className="h-8 w-8" />,
      doctorsCount: 10,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: '5',
      title: 'Ophtalmologie',
      description: 'Services complets de soins oculaires incluant examens de routine, chirurgie et correction de la vision.',
      icon: <Eye className="h-8 w-8" />,
      doctorsCount: 8,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: '6',
      title: 'Neurologie',
      description: 'Diagnostic et traitement des troubles du système nerveux incluant conditions cérébrales et spinales.',
      icon: <Brain className="h-8 w-8" />,
      doctorsCount: 7,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: '7',
      title: 'Dermatologie',
      description: 'Soins de la peau, des cheveux et des ongles incluant dermatologie médicale et traitements cosmétiques.',
      icon: <Shield className="h-8 w-8" />,
      doctorsCount: 9,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: '8',
      title: 'Pharmacie',
      description: 'Gestion des médicaments, services de prescription et consultations pharmaceutiques.',
      icon: <Pill className="h-8 w-8" />,
      doctorsCount: 6,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: '9',
      title: 'Soins d\'Urgence',
      description: 'Services médicaux d\'urgence 24/7 pour conditions urgentes et potentiellement mortelles.',
      icon: <Activity className="h-8 w-8" />,
      doctorsCount: 20,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: '10',
      title: 'Santé Mentale',
      description: 'Services complets de santé mentale incluant conseils et soins psychiatriques.',
      icon: <Users className="h-8 w-8" />,
      doctorsCount: 14,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: '11',
      title: 'Radiologie',
      description: 'Services d\'imagerie avancée incluant rayons X, IRM, scanners CT et échographies.',
      icon: <Zap className="h-8 w-8" />,
      doctorsCount: 5,
      color: 'from-violet-500 to-violet-600'
    },
    {
      id: '12',
      title: 'Laboratoire',
      description: 'Tests diagnostiques complets et services de pathologie pour diagnostics précis.',
      icon: <Microscope className="h-8 w-8" />,
      doctorsCount: 8,
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const scrollToDoctors = () => {
    const element = document.querySelector('#doctors');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="specialties" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nos Spécialités <span className="gradient-text">Médicales</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Nous offrons des services de santé complets dans plusieurs spécialités 
            avec des médecins expérimentés et des installations de pointe.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {specialties.map((specialty, index) => (
            <Card
              key={specialty.id}
              className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={scrollToDoctors}
            >
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${specialty.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {specialty.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {specialty.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 text-balance leading-relaxed">
                  {specialty.description}
                </p>

                {/* Doctors Count */}
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-accent font-medium">
                    {specialty.doctorsCount} Médecins Disponibles
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-up">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Vous ne trouvez pas votre spécialité ?
            </h3>
            <p className="text-muted-foreground mb-6 text-balance">
              Nous étendons constamment notre réseau de professionnels de santé. 
              Contactez-nous pour vous renseigner sur des spécialités supplémentaires ou des besoins médicaux spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToDoctors}
                className="btn-medical-primary text-white font-medium px-8 hover-glow"
              >
                Voir Tous les Médecins
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Nous Contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;