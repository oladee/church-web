import { Button } from "./ui/button";
import { Play, Calendar, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background pattern */}


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <div className="space-y-8 mb-12">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
                Experience the
                <span className="block text-brand-gold">Power of God</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Join Prophet Nana Akwasis Sarfo and the Springlife Worship Center community 
                for life-transforming worship, powerful teachings, and divine encounters.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <Calendar className="w-6 h-6 text-brand-gold mb-2 mx-auto" />
                <div className="text-sm font-semibold">Sunday Services</div>
                <div className="text-xs opacity-90">10:00 AM &amp; 6:00 PM</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <Clock className="w-6 h-6 text-brand-gold mb-2 mx-auto" />
                <div className="text-sm font-semibold">Morning Devotion</div>
                <div className="text-xs opacity-90">Daily 5:00-7:00 AM</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <Users className="w-6 h-6 text-brand-gold mb-2 mx-auto" />
                <div className="text-sm font-semibold">Spirit of Jezebel</div>
                <div className="text-xs opacity-90">Tuesdays 8:00 PM</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Live Service
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg"
              >
                Join Our Community
              </Button>
            </div>
          </div>

          {/* Live Service Badge */}
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse mb-8">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></div>
            LIVE: Sunday Morning Service
          </div>

          {/* Ministry Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">20+</div>
              <div className="text-sm opacity-90">Years of Ministry</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">1000+</div>
              <div className="text-sm opacity-90">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">50+</div>
              <div className="text-sm opacity-90">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-gold mb-2">24/7</div>
              <div className="text-sm opacity-90">Prayer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}