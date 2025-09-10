import Navigation from '@/components/Navigation';
import ParallaxSection from '@/components/ParallaxSection';
import CountdownTimer from '@/components/CountdownTimer';
import RSVPForm from '@/components/RSVPForm';
import MusicPlayer from '@/components/MusicPlayer';
import PhotoGallery from '@/components/PhotoGallery';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Heart, Camera, Calendar, Gift } from 'lucide-react';
import marbleBackground from '@/assets/marble-background.jpg';
import churchInterior from '@/assets/church-interior.jpg';
import receptionVenue from '@/assets/reception-venue.jpg';
import coupleMain from '@/assets/couple-main.jpg';
import earlyDating from '@/assets/early-dating.jpg';
import engagement from '@/assets/engagement.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <MusicPlayer />

      {/* Hero Section */}
      <ParallaxSection
        backgroundImage={marbleBackground}
        speed={0.3}
        className="min-h-screen flex items-center justify-center relative"
        id="home"
      >
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="text-center z-10 fade-in-up max-w-5xl mx-auto px-6 py-16">
          <p className="wedding-script mb-6">
            You are officially invited
          </p>
          
          <h1 className="wedding-title mb-8">
            Warren & Patricia
          </h1>
          
          <p className="wedding-date mb-12">
            October 4, 2025
          </p>
          
          <p className="wedding-subtitle mb-16 max-w-3xl mx-auto">
            Together with our families, we joyfully invite you to celebrate our love in an elegant ceremony blending tradition with our modern story.
          </p>
          
          <CountdownTimer />
        </div>
      </ParallaxSection>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Our Love Story</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every love story is beautiful, but ours is our favorite
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="wedding-card p-8">
                <h3 className="text-2xl font-serif text-primary mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  How We Met
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our paths first crossed during a beautiful sunset evening in 2019. What started as a chance meeting 
                  turned into countless conversations, shared dreams, and the realization that we had found our perfect match. 
                  From that moment, we knew our hearts belonged together.
                </p>
              </div>
              
              <div className="wedding-card p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">The Proposal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  On a magical evening overlooking our favorite spot, Warren got down on one knee and asked the most 
                  important question of his life. With tears of joy and an overwhelming "YES!", Patricia said yes to 
                  forever. It was the beginning of our journey to becoming husband and wife.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="wedding-card overflow-hidden">
                <img 
                  src={coupleMain} 
                  alt="Warren and Patricia together" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="wedding-card overflow-hidden">
                  <img 
                    src={earlyDating} 
                    alt="Early dating photo" 
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="wedding-card overflow-hidden">
                  <img 
                    src={engagement} 
                    alt="Engagement photo" 
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section id="ceremony" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Wedding Details</h2>
            <p className="text-xl text-muted-foreground">Join us for our special day</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Ceremony Details */}
            <Card className="wedding-card overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={churchInterior} 
                  alt="Invencion Dela Sta. Cruz Parish Church" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Holy Matrimony
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Invencion Dela Sta. Cruz Parish Church</h4>
                      <p className="text-muted-foreground">Alitagtag, Batangas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">3:00 PM</h4>
                      <p className="text-muted-foreground">Please arrive 30 minutes early</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-maroon hover:opacity-90">
                  View Location
                </Button>
              </CardContent>
            </Card>

            {/* Reception Details */}
            <Card className="wedding-card overflow-hidden" id="reception">
              <div className="relative h-64">
                <img 
                  src={receptionVenue} 
                  alt="Villa Salome Resort" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-6 flex items-center gap-2">
                  <Gift className="w-6 h-6" />
                  Wedding Reception
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Villa Salome Resort</h4>
                      <p className="text-muted-foreground">Pinagkurusan, Alitagtag, Batangas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Following the ceremony</h4>
                      <p className="text-muted-foreground">Dinner, dancing, and celebration</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-maroon hover:opacity-90">
                  View Location
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Dress Code & Attire</h2>
            <div className="wedding-card p-8 mb-8">
              <h3 className="text-2xl font-serif text-primary mb-4">Dress Code & Attire</h3>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Formal, Semi-formal, or Filipiniana</strong><br/>
                Colors: <strong>Champagne or Nude</strong> tones preferred<br/>
                Accent colors: White, Silver, and Gold
              </p>
              <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
                <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-200 mx-auto" title="Champagne"></div>
                <div className="w-16 h-16 rounded-full bg-stone-200 border-2 border-stone-300 mx-auto" title="Nude"></div>
                <div className="w-16 h-16 rounded-full bg-wedding-gold mx-auto" title="Gold"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section id="photos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Our Memories</h2>
            <p className="text-xl text-muted-foreground">A glimpse into our journey together</p>
          </div>
          
          <PhotoGallery />
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Camera className="w-4 h-4 mr-2" />
              More photos coming soon!
            </Button>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">RSVP</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your presence would make our day even more special. Please let us know if you'll be joining us!
            </p>
          </div>
          <RSVPForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif mb-4">Warren & Patricia</h3>
          <p className="text-lg mb-6">October 4, 2025</p>
          <p className="text-sm opacity-75">
            We can't wait to celebrate with you! ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
