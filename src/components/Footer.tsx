import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-hope-orange" />
              <h3 className="text-xl font-bold">St Panteleimon</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming lives through education, nutrition, and hope. 
              A mission dedicated to supporting orphans and vulnerable children.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-primary-foreground/80 hover:text-hope-orange transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#feeding" 
                  className="text-primary-foreground/80 hover:text-hope-orange transition-colors duration-200"
                >
                  Feeding Program
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="text-primary-foreground/80 hover:text-hope-orange transition-colors duration-200"
                >
                  Education Program
                </a>
              </li>
              <li>
                <a 
                  href="#donate" 
                  className="text-primary-foreground/80 hover:text-hope-orange transition-colors duration-200"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-hope-orange" />
                <span className="text-primary-foreground/80">+254724046338</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-hope-orange" />
                <span className="text-primary-foreground/80">opadayiraf@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-hope-orange mt-1" />
                <span className="text-primary-foreground/80">
                  Korogocho, Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Parent Organization */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Parent Organization</h4>
            <p className="text-primary-foreground/80 text-sm">
              St Panteleimon Mission School is a proud subsidiary of
            </p>
            <a 
              href="https://panteleimon.co.ke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground text-primary px-4 py-2 rounded-lg hover:bg-primary-foreground/90 transition-colors duration-200 font-medium"
            >
              panteleimon.co.ke
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} St Panteleimon Mission School. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-warm-red" />
              <span>for the children</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;