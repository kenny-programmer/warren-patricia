import Navigation from '@/components/Navigation';
import ParallaxSection from '@/components/ParallaxSection';
import CountdownTimer from '@/components/CountdownTimer';
import RSVPForm from '@/components/RSVPForm';
import MusicPlayer from '@/components/MusicPlayer';
import PhotoGallery from '@/components/PhotoGallery';
import FAQSection from '@/components/FAQSection';
import GiftRegistry from '@/components/GiftRegistry';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Heart, Camera, Calendar, Gift, MessageCircle, Bike, Sunrise, CheckCircle, ShieldCheck } from 'lucide-react';
import marbleBackground from '@/assets/marble-background.jpg';

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
      <section id="story" className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Heart className="w-8 h-8 text-rose-400" />
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-primary mb-6 relative">
              Our Love Story
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-rose-300 to-amber-300 rounded-full"></div>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
              "Every love story is beautiful, but ours is our favorite"
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Timeline Design */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-rose-200 via-pink-300 to-amber-200 h-full hidden lg:block"></div>
              <div className="space-y-16 lg:space-y-24">

                {/* 1. The Christmas Party */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-rose-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <Calendar className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">December 19, 2019</h3>
                          <p className="text-rose-600 font-medium">A Night to Remember</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        At their company Christmas party, Patricia won a singing contest with "Reflection" from Mulan. Warren, a playful stranger, cheered her on with a fan—his face hidden behind a costume and wig. That night, his dance group also won, and though Patricia didn't know his name, one dancer stood out—the confident one at the center.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rose-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img src="/img1.jpg" alt="Christmas Party" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* 2. A Message and a Prayer */}
                <div className="relative flex flex-col lg:flex-row-reverse items-center">
                  <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                          <MessageCircle className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">A Message and a Prayer</h3>
                          <p className="text-blue-600 font-medium">Divine Timing</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Days later, Patricia faced a low point and prayed for hope. That night, she replied to a message she'd ignored twice before—it was Warren, the same man from the party. That single reply began something bigger than either expected.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="lg:w-1/2 lg:pr-12">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img src="/img2.jpg" alt="First Connection" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* 3. First Ride Together */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-green-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                          <Bike className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">January 1, 2020</h3>
                          <p className="text-green-600 font-medium">First Ride</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Warren and Patricia’s first ride together was to Nasugbu. She was supposed to backride with a male friend, but Warren secretly persuaded him to let her ride with him instead—and she did. With the wind on her face and the sun on her skin, Patricia&apos;s worries melted away.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="lg:w-1/2 lg:pr-12">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img src="/img3.jpg" alt="First Connection" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* 4. Sunrise and Confession */}
                <div className="relative flex flex-col lg:flex-row-reverse items-center">
                  <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-orange-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                          <Sunrise className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">January 4 & 12, 2020</h3>
                          <p className="text-orange-600 font-medium">Sunrise & Confession</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Just days later, on Warren&apos;s birthday—January 4—he invited Patricia out. On her last day at work, they shared 5-peso coffee while watching the sunrise. By January 12, they joined his motorcycle group to visit an orphanage, then rode to Monte Maria and the beaches of Calatagan. That same day, as Taal Volcano erupted and the skies turned dark, Warren brought Patricia home safely before making the long ride back alone. That night, he confessed his love.
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img src="/img4.jpg" alt="Together" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* 5. Saying Yes */}
                <div className="relative flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-purple-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">February 11, 2020</h3>
                          <p className="text-purple-600 font-medium">Saying Yes</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Warren saw the darkness in her, yet loved her as if she were the sun. In that love, Patricia&apos;s heart was captured, and she finally embraced her true feelings, choosing to accept Warren’s love and promise. From then on, he vowed to bring her happiness and show her a world that was brighter and more meaningful with him by her side.

                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-400 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="lg:w-1/2 lg:pl-12">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img src="/jabe.jpg" alt="Together" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Proposal - Special Highlight */}
            <div className="mt-24 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-pink-50 to-purple-100 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 border-2 border-rose-200">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full shadow-lg mb-4">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-primary mb-2">The Proposal</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200">
                    <p className="text-lg text-muted-foreground leading-relaxed text-center italic">
                      "On February 10, 2024—a day before their 4th anniversary—Warren created a moment that would forever change their story. With family present, he asked Patricia the most heartfelt question of his life. In that sacred moment, she gave her sweetest 'yes'—a promise she knew would belong only to him, the man God had destined for her"
                    </p>

                    <div className="text-center mt-8">
                      <div className="inline-block bg-white rounded-full p-6 shadow-lg">
                        <div className="text-4xl">💍</div>
                      </div>
                      <p className="text-rose-600 font-medium mt-4">February 10, 2024</p>
                      <p className="text-sm text-rose-500">Forever Starts Here</p>
                    </div>
                  </div>
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
                  src="/church.jpg"
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
                <Button
                onClick={() => {
                  window.open("https://maps.app.goo.gl/kNr2hYf7QF1icQvH6", "_blank", "noopener,noreferrer")
                }}
                className="w-full mt-6 bg-gradient-maroon hover:opacity-90"
              >
                View Location
              </Button>

              </CardContent>
            </Card>

            {/* Reception Details */}
            <Card className="wedding-card overflow-hidden" id="reception">
              <div className="relative h-64">
                <img
                  src="/villa.jpg"
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
                <Button
                onClick={() => {
                  window.open("https://maps.app.goo.gl/mL2KSs2sNvDWdyx28", "_blank", "noopener,noreferrer")
                }}
                className="w-full mt-6 bg-gradient-maroon hover:opacity-90"
              >
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
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Our Prenuptial Photos</h2>
            <p className="text-xl text-muted-foreground">A glimpse into our prenup photoshoot</p>
          </div>

          <PhotoGallery />
        </div>
      </section>

      {/* Gift Registry Section */}
      <section id="gifts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Gift Registry</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              If you'd like to share a gift, please choose any option below.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <GiftRegistry />
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            RSVP</h2>
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
          <p className="text-sm opacity-75 mb-8">
            We can't wait to celebrate with you! ❤️
          </p>

          {/* Developer Watermark */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <p className="text-xs text-white/80 mb-3">
                Website & RSVP System Created by
              </p>
              <h4 className="text-sm font-semibold text-white mb-3">Victor Roxas</h4>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
                <a
                  href="https://victorroxas.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors underline underline-offset-2"
                >
                  <span className="text-sm">💻</span>
                  Portfolio
                </a>
                <span className="hidden sm:inline text-white/60">•</span>
                <a
                  href="https://www.facebook.com/vicqttt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors underline underline-offset-2"
                >
                  <span className="text-sm">📘</span>
                  Facebook
                </a>
                <span className="hidden sm:inline text-white/60">•</span>
                <a
                  href="mailto:vctrrxs@gmail.com"
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors underline underline-offset-2"
                >
                  <span className="text-sm">✉️</span>
                  Email
                </a>
              </div>
              <p className="text-xs text-white/70 mt-3">
                Need a custom wedding website? Contact me!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};



export default Index;