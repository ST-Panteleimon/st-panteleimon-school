import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Utensils, Users } from 'lucide-react';
import feedingImage from '@/assets/feeding-program.jpg';

const FeedingProgram = () => {
  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="feeding" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Feeding Program for Hope
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Addressing starvation among orphans, street children and vulnerable communities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Card className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300">
                <CardContent className="p-0">
                  <img 
                    src={feedingImage} 
                    alt="Children enjoying nutritious meals at St Panteleimon"
                    className="w-full h-80 object-cover"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-warm p-3 rounded-full">
                  <Utensils className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  ST PANTELEIMON FEEDING PROGRAM
                </h3>
              </div>

              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Starvation is a grim reality for children around the world. Starvation not only takes lives 
                  but is also the culprit for disease, depression which leads to crime, loss of energy, 
                  along with range of health problems.
                </p>
                <p>
                  The problem is increasing and taking more lives than ever before. Our team works with 
                  those in the program to provide counseling, educational opportunities and continual 
                  spiritual mentorship, bringing hope, love and guidance.
                </p>
                <div className="bg-gradient-to-r from-hope-orange/10 to-warm-yellow/10 p-6 rounded-lg border-l-4 border-hope-orange">
                  <p className="font-semibold text-foreground">
                    Through kind and generous well wishers, we have been able to provide meals daily to over 231 children.
                  </p>
                </div>
              </div>

              <Button 
                onClick={scrollToDonate}
                className="bg-gradient-warm hover:shadow-warm transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
              >
                <Heart className="mr-2 h-5 w-5" />
                Support Our Feeding Program
              </Button>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-sky-blue/5 border-primary/20 shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Shaping the Future</h3>
              </div>
              
              <div className="prose prose-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
                <p>
                  St Panteleimon mission school has over the years since its inception been shaping up lives 
                  of vulnerable children and more importantly the orphans. Many programs have been executed 
                  here and amongst them is the feeding programme.
                </p>
                <p>
                  It's common sense that there can never be any existence without food, it's a basic need 
                  and its quite pivotal in life sustenance. Therefore, at St Panteleimon center we feed 
                  our children with relevant diet.
                </p>
                <p>
                  We buy and incorporate other like mind stake holders, in support of food supply and other 
                  essentials that abide with humanities. To this effect, we urge all esteemed readers of 
                  our chronicled literature on the development of St Panteleimons journey to excellence 
                  to chip in and give us support.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-background rounded-lg shadow-gentle">
                  <div className="bg-gradient-warm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">231+ Children</h4>
                  <p className="text-muted-foreground">Fed daily with nutritious meals</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-gentle">
                  <div className="bg-gradient-sky p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">Holistic Care</h4>
                  <p className="text-muted-foreground">Counseling & spiritual mentorship</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-gentle">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Utensils className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground">Daily Nutrition</h4>
                  <p className="text-muted-foreground">Balanced meals for healthy growth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedingProgram;