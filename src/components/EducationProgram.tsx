import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users, Heart } from 'lucide-react';
import founderImage from '@/assets/founder-portrait.jpg';

const EducationProgram = () => {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sky bg-clip-text text-transparent">
              Supporting Education in Slums
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Providing quality education to orphans and vulnerable children in underserved communities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-sky p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  ST PANTELEIMON MISSION SCHOOL
                </h3>
              </div>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  St Panteleimon Mission School offers education to orphans and vulnerable children 
                  living in slum areas. Currently there are more than 230 children who receive our 
                  support and they fully rely on kind well wishers to acquire education at our mission center.
                </p>
                
                <div className="bg-gradient-to-r from-sky-blue/10 to-gentle-green/10 p-6 rounded-lg border-l-4 border-sky-blue">
                  <p className="font-semibold text-foreground mb-2">
                    You can make a difference in the life of a child through a one time or monthly donation to our education program.
                  </p>
                  <p className="text-sm">
                    Kindly support this noble course by donating to our mission center.
                  </p>
                </div>
              </div>

              <Button 
                onClick={scrollToDonate}
                className="bg-gradient-sky hover:shadow-warm transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Support Education Program
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <img 
                    src={founderImage} 
                    alt="Mr. Raphael Andayi, Founding Director of St Panteleimon Mission School"
                    className="w-full h-80 object-cover rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-foreground mb-2">MR RAPHAEL ANDAYI</h4>
                    <p className="text-muted-foreground font-medium">Founding Director</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-gentle-green/5 to-hope-orange/5 border-gentle-green/20 shadow-card">
            <CardContent className="p-8">
              <div className="prose prose-lg text-muted-foreground max-w-4xl mx-auto space-y-4 mb-8">
                <p>
                  MR RAPHAEL ANDAYI the FOUNDING DIRECTOR philosophy in making education a cornerstone 
                  foundation for children, his dreams for the future of these vulnerable children has 
                  come of an age and now the school can boast of offering quality education.
                </p>
                <p>
                  The center buys books both textbooks and writing materials together with the relevant 
                  modern educational apparatus that goes in hand with todays academic grounds, Teachers 
                  well qualified with standard academic standing with an astute track record.
                </p>
                <p>
                  On this account, St Panteleimon wishes to call upon all kind well wishers with eyes 
                  on the future to give this mission added face value by supporting us in making this 
                  education program success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <div className="text-center p-6 bg-background rounded-lg shadow-gentle">
                  <div className="bg-gradient-sky p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">230+</h4>
                  <p className="text-muted-foreground text-sm">Children Educated</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-gentle">
                  <div className="bg-gradient-warm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">Quality</h4>
                  <p className="text-muted-foreground text-sm">Educational Materials</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-gentle">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">Qualified</h4>
                  <p className="text-muted-foreground text-sm">Teachers & Staff</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-gentle">
                  <div className="bg-gradient-to-r from-gentle-green to-hope-orange p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">Hope</h4>
                  <p className="text-muted-foreground text-sm">Brighter Future</p>
                </div>
              </div>

              <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-sky-blue/10 rounded-lg border border-primary/20">
                <h4 className="text-2xl font-bold mb-4 text-foreground">Make Lives Better</h4>
                <p className="text-lg text-muted-foreground mb-6">
                  Donating to St Panteleimon mission school means you make lives better for orphans and vulnerable children.
                </p>
                <Button 
                  onClick={scrollToDonate}
                  size="lg"
                  className="bg-gradient-primary hover:shadow-warm transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationProgram;