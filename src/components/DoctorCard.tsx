import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, Clock, MapPin } from 'lucide-react';

interface DoctorCardProps {
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
  onBookAppointment: (doctorId: string) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  id,
  name,
  specialty,
  image,
  rating,
  experience,
  availability,
  location,
  consultationFee,
  languages,
  onBookAppointment
}) => {
  return (
    <Card className="glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover-glow">
      <CardContent className="p-6">
        {/* Doctor Image & Basic Info */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-primary">{name}</h3>
            <p className="text-accent font-medium">{specialty}</p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({rating})</span>
            </div>
          </div>
        </div>

        {/* Doctor Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">{experience} experience</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">{location}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="text-success font-medium">{availability}</span>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Langues :</p>
          <div className="flex flex-wrap gap-2">
            {languages.map((language, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {language}
              </Badge>
            ))}
          </div>
        </div>

        {/* Consultation Fee */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Tarif Consultation</p>
            <p className="text-lg font-bold text-primary">{consultationFee}</p>
          </div>
        </div>

        {/* Book Appointment Button */}
        <Button
          onClick={() => onBookAppointment(id)}
          className="btn-medical-primary text-white font-medium w-full hover-glow"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Prendre RDV
        </Button>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;