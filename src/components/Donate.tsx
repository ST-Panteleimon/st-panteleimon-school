import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Map from './Map';

const Donate = () => {
  const [donationDetails, setDonationDetails] = useState({
    description: '',
    amount: ''
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDonationDetails(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    if (!donationDetails.description || !donationDetails.amount) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Donation Details:', donationDetails);
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Support Our Mission
        </h2>
        <div className="max-w-4xl mx-auto space-y-12">
          <Card className="border-none shadow-card hover:shadow-warm transition-shadow duration-300 bg-gradient-to-br from-background to-secondary/30">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold bg-gradient-warm bg-clip-text text-transparent">
                Your Support Makes a Difference
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-8 text-lg">
                Join us in making a positive impact on the lives of orphans, abandoned children, and widows.
                Every contribution helps create a brighter future.
              </p>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-warm hover:shadow-warm text-primary-foreground px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-gentle">
                    Make a Donation
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px] bg-background">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl text-primary mb-4">
                      Support Our Mission
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg mb-4">Payment Methods</h3>
                      <div className="p-4 bg-secondary/50 rounded-lg border border-primary/10">
                        <h4 className="font-bold mb-2 text-foreground">World Remit</h4>
                        <p className="text-muted-foreground">+254724046338</p>
                        <p className="text-muted-foreground">Korogocho Nairobi Kenya</p>
                      </div>
                      <div className="p-4 bg-secondary/50 rounded-lg border border-primary/10">
                        <h4 className="font-bold mb-2 text-foreground">Bank Transfer</h4>
                        <p className="text-sm text-muted-foreground">Account Name: St Panteleimon community based organisation</p>
                        <p className="text-muted-foreground">Account Number: 1294599038</p>
                        <p className="text-muted-foreground">Swift Code: KCBLKENX</p>
                      </div>
                    </div>
                    {/* PayPal Button */}
                    <div className="space-y-4">
                      <div className="p-4 bg-secondary/50 rounded-lg border border-primary/10">
                        <h4 className="font-bold mb-2 text-foreground">PayPal</h4>
                        <p className="mb-4 text-muted-foreground">Simple and secure online payments</p>
                        <form action="https://www.paypal.com/donate" method="post" target="_top" className="flex justify-center">
                          <input type="hidden" name="hosted_button_id" value="EM2KMUV5XU3L6" />
                          <input 
                            type="image" 
                            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" 
                            name="submit" 
                            title="PayPal - The safer, easier way to pay online!" 
                            alt="Donate with PayPal button"
                            className="cursor-pointer hover:opacity-90 transition-opacity" 
                          />
                        </form>
                      </div>
                      <div className="p-4 bg-secondary/50 rounded-lg border border-primary/10">
                        <h4 className="font-bold mb-2 text-foreground">PayPal Email</h4>
                        <p className="text-muted-foreground">opadayiraf@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6">
              Visit Us
            </h3>
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;