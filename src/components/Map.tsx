import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Map = () => {
  const schoolLocation = {
    name: "St Panteleimon Mission School",
    address: "Korogocho, Nairobi, Kenya",
    coordinates: { lat: -1.2571, lng: 36.8742 }
  };

  const openInMaps = () => {
    const query = encodeURIComponent(`${schoolLocation.name}, ${schoolLocation.address}`);
    window.open(`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.866140551905!2d36.87800957496569!3d-1.2517833987362936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTUnMDYuNCJTIDM2wrA1Mic1MC4xIkU!5e0!3m2!1sen!2ske!4v1723724677373!5m2!1sen!2ske`, '_blank');
  };

  return (
    <Card className="overflow-hidden shadow-card transition-all duration-300 hover:shadow-warm">
      <div className="bg-gradient-primary p-6 text-primary-foreground">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="h-6 w-6" />
          <h3 className="text-xl font-semibold">{schoolLocation.name}</h3>
        </div>
        <p className="text-primary-foreground/90 mb-4">{schoolLocation.address}</p>
        <button
          onClick={openInMaps}
          className="flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-lg hover:bg-primary-foreground/90 transition-colors duration-200"
        >
          <Navigation className="h-4 w-4" />
          Get Directions
        </button>
      </div>
      
      {/* Google Maps Embed */}
      <div className="h-64 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.866140551905!2d36.87800957496569!3d-1.2517833987362936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTUnMDYuNCJTIDM2wrA1Mic1MC4xIkU!5e0!3m2!1sen!2ske!4v1723724677373!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="St Panteleimon Mission School Location"
        />
      </div>
    </Card>
  );
};

export default Map;