import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Headphones,
  Calendar
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Support Téléphonique',
      details: ['+33 1 23 45 67 89', '+33 1 98 76 54 32'],
      description: 'Ligne d\'urgence 24/7 disponible'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Contactez-nous par Email',
      details: ['info@prontohealth.fr', 'rendezvous@prontohealth.fr'],
      description: 'Réponse sous 2-4 heures'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Venez nous Voir',
      details: ['123 Avenue de la Santé', 'Quartier Médical, Paris 75001'],
      description: 'Parking facile disponible'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Heures d\'Ouverture',
      details: ['Lun - Ven : 8h00 - 20h00', 'Sam - Dim : 9h00 - 18h00'],
      description: 'Services d\'urgence 24/7'
    }
  ];

  const subjects = [
    'Demande Générale',
    'Réservation de Rendez-vous',
    'Demande de Dossier Médical',
    'Questions d\'Assurance',
    'Renouvellement d\'Ordonnance',
    'Commentaires et Suggestions',
    'Support Technique',
    'Urgence (Appelez plutôt)'
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Informations Manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Envoyé avec Succès ! 📧",
      description: "Merci de nous avoir contactés. Nous vous répondrons sous 2-4 heures pendant les heures d'ouverture."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Prenez <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Vous avez des questions sur nos services ? Besoin de planifier un rendez-vous ? 
            Nous sommes là pour vous aider avec tous vos besoins de santé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="glass-card rounded-2xl p-6 animate-fade-up">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Headphones className="mr-3 h-5 w-5 text-accent" />
                Actions Rapides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  className="btn-medical-primary text-white font-medium hover-glow"
                  onClick={() => {
                    const element = document.querySelector('#booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Prendre RDV
                </Button>
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler Urgence
                </Button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="glass-card hover:shadow-lg transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                        <div className="text-accent">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-foreground mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="glass-card animate-fade-up">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground">Carte Interactive</p>
                    <p className="text-sm text-muted-foreground">123 Avenue de la Santé, Quartier Médical</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card animate-fade-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-accent" />
                Envoyez-nous un Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Nom Complet *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Entrez votre nom complet"
                      required
                      className="border-accent/20 focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Adresse Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Entrez votre email"
                      required
                      className="border-accent/20 focus:ring-accent"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Numéro de Téléphone (Optionnel)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Entrez votre numéro de téléphone"
                      className="border-accent/20 focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">
                    Sujet *
                    </Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="border-accent/20 focus:ring-accent">
                        <SelectValue placeholder="Choisissez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Dites-nous comment nous pouvons vous aider..."
                    rows={6}
                    required
                    className="border-accent/20 focus:ring-accent"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="btn-medical-primary text-white font-medium w-full hover-glow"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;