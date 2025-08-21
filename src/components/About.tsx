import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, BookOpen, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A subsidiary of panteleimon.co.ke, dedicated to transforming lives through education and compassionate care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-gradient-to-br from-primary/5 to-sky-blue/5 border-primary/20 shadow-card hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide comprehensive support to orphans, street children, and vulnerable communities 
                  through quality education, nutritious feeding programs, and spiritual mentorship. We believe 
                  that every child deserves access to basic necessities and opportunities for a brighter future.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-hope-orange/5 to-warm-yellow/5 border-hope-orange/20 shadow-card hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-warm p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To create a world where no child goes hungry or lacks access to education. We envision 
                  communities where vulnerable children are empowered with knowledge, nourished with love, 
                  and equipped with the tools they need to break the cycle of poverty.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-background rounded-lg shadow-gentle border border-primary/10">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-xl text-foreground mb-2">230+</h4>
              <p className="text-muted-foreground">Children Supported</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-gentle border border-hope-orange/20">
              <div className="bg-gradient-warm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-xl text-foreground mb-2">231</h4>
              <p className="text-muted-foreground">Daily Meals Provided</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-gentle border border-sky-blue/20">
              <div className="bg-gradient-sky p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-xl text-foreground mb-2">Daily</h4>
              <p className="text-muted-foreground">Education Programs</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-gentle border border-gentle-green/20">
              <div className="bg-gradient-to-r from-gentle-green to-hope-orange p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-xl text-foreground mb-2">Hope</h4>
              <p className="text-muted-foreground">For Every Child</p>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-background to-secondary/30 border-primary/20 shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-foreground">Our Impact</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Since our inception, St Panteleimon Mission School has been a beacon of hope for 
                  vulnerable children in the Korogocho community and beyond.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-primary p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Education First</h4>
                  <p className="text-muted-foreground text-sm">
                    Providing quality education with qualified teachers and modern educational materials
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-warm p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Holistic Care</h4>
                  <p className="text-muted-foreground text-sm">
                    Combining nutrition, education, counseling, and spiritual guidance for complete development
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-sky p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Community Focus</h4>
                  <p className="text-muted-foreground text-sm">
                    Working with stakeholders and well-wishers to create sustainable positive change
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;