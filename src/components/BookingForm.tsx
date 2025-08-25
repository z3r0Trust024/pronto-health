import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface BookingFormData {
  patientName: string;
  email: string;
  phone: string;
  doctor: string;
  service: string;
  date: Date | undefined;
  time: string;
  notes: string;
}

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    email: '',
    phone: '',
    doctor: '',
    service: '',
    date: undefined,
    time: '',
    notes: ''
  });

  const doctors = [
    'Dr. Sarah Chen - Médecine Générale',
    'Dr. Miguel Rodriguez - Cardiologie',
    'Dr. Amara Johnson - Pédiatrie'
  ];

  const services = [
    'Consultation Générale',
    'Bilan de Santé',
    'Rendez-vous de Suivi',
    'Consultation Spécialisée',
    'Soins Préventifs',
    'Vaccination'
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.patientName || !formData.email || !formData.phone || 
        !formData.doctor || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Informations Manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Rendez-vous Réservé avec Succès ! 🎉",
      description: `Votre rendez-vous avec ${formData.doctor} le ${format(formData.date, 'PPP')} à ${formData.time} a été confirmé. Vous recevrez un email de confirmation sous peu.`
    });

    // Reset form
    setFormData({
      patientName: '',
      email: '',
      phone: '',
      doctor: '',
      service: '',
      date: undefined,
      time: '',
      notes: ''
    });
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Réservez Votre <span className="gradient-text">Rendez-vous</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Planifiez votre rendez-vous médical en quelques étapes simples. 
            Choisissez votre médecin préféré, le service et le créneau horaire.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card animate-fade-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center">
                <CalendarIcon className="mr-3 h-6 w-6 text-accent" />
                Planifiez Votre Rendez-vous
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="patientName" className="flex items-center text-foreground font-medium">
                      <User className="mr-2 h-4 w-4 text-accent" />
                      Nom Complet *
                    </Label>
                    <Input
                      id="patientName"
                      value={formData.patientName}
                      onChange={(e) => handleInputChange('patientName', e.target.value)}
                      placeholder="Entrez votre nom complet"
                      required
                      className="border-accent/20 focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center text-foreground font-medium">
                      <Mail className="mr-2 h-4 w-4 text-accent" />
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

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center text-foreground font-medium">
                      <Phone className="mr-2 h-4 w-4 text-accent" />
                      Numéro de Téléphone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Entrez votre numéro de téléphone"
                      required
                      className="border-accent/20 focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center text-foreground font-medium">
                      <User className="mr-2 h-4 w-4 text-accent" />
                      Choisir un Médecin *
                    </Label>
                    <Select value={formData.doctor} onValueChange={(value) => handleInputChange('doctor', value)}>
                      <SelectTrigger className="border-accent/20 focus:ring-accent">
                        <SelectValue placeholder="Choisissez votre médecin" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor} value={doctor}>
                            {doctor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center text-foreground font-medium">
                      <FileText className="mr-2 h-4 w-4 text-accent" />
                      Type de Service *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="border-accent/20 focus:ring-accent">
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center text-foreground font-medium">
                      <CalendarIcon className="mr-2 h-4 w-4 text-accent" />
                      Date Préférée *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-accent/20 hover:bg-accent/5",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, "PPP") : "Choisir une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={handleDateSelect}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center text-foreground font-medium">
                      <Clock className="mr-2 h-4 w-4 text-accent" />
                      Heure Préférée *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger className="border-accent/20 focus:ring-accent">
                        <SelectValue placeholder="Sélectionnez l'heure" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="flex items-center text-foreground font-medium">
                    <FileText className="mr-2 h-4 w-4 text-accent" />
                    Notes Supplémentaires (Optionnel)
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Toute préoccupation spécifique, symptôme ou exigence que vous aimeriez mentionner..."
                    rows={4}
                    className="border-accent/20 focus:ring-accent"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="btn-medical-primary text-white font-medium w-full md:w-auto px-12 py-3 text-lg hover-glow"
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Prendre Rendez-vous
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;