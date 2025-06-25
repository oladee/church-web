import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Bell, Gift, Calendar, BookOpen, Users } from "lucide-react";

export function Newsletter() {
  const benefits = [
    {
      icon: Calendar,
      title: "Event Updates",
      description: "Be the first to know about upcoming events, services, and special programs"
    },
    {
      icon: BookOpen,
      title: "Sermon Notes",
      description: "Receive weekly sermon summaries and discussion questions for small groups"
    },
    {
      icon: Gift,
      title: "Exclusive Content",
      description: "Access to devotionals, prayer guides, and inspirational content"
    },
    {
      icon: Users,
      title: "Community News",
      description: "Stay connected with church family news, celebrations, and prayer requests"
    }
  ];

  return (
    <section id="newsletter" className="section-padding bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-heading">Stay Connected</h2>
                <p className="text-blue-200 text-lg">Join our church family newsletter</p>
              </div>
            </div>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't miss out on what God is doing in our church community. Subscribe to our 
              weekly newsletter and stay informed about events, sermons, and opportunities 
              to grow in faith together.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="text-brand-gold font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-blue-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Newsletter Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-brand-gold" />
                Subscribe Today
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-brand-gold focus:bg-white/30"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-brand-gold focus:bg-white/30"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:border-brand-gold focus:bg-white/30"
                />
                <Button className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold py-3">
                  Subscribe to Newsletter
                </Button>
              </form>
              <p className="text-blue-200 text-xs mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Right Content - Stats & Social Proof */}
          <div className="text-white">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-heading text-brand-gold mb-6">Join Our Community</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">1,200+</div>
                    <div className="text-blue-200 text-sm">Newsletter Subscribers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">52</div>
                    <div className="text-blue-200 text-sm">Weekly Issues Sent</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">95%</div>
                    <div className="text-blue-200 text-sm">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-blue-200 text-sm">Event Announcements</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Newsletter Preview */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-brand-gold font-semibold mb-4 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  This Week's Highlights
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="text-white font-medium text-sm">Easter Celebration Service</h5>
                      <p className="text-blue-200 text-xs">Join us for a special resurrection Sunday service</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="text-white font-medium text-sm">Community Food Drive</h5>
                      <p className="text-blue-200 text-xs">Volunteers needed for our monthly outreach</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="text-white font-medium text-sm">New Sermon Series</h5>
                      <p className="text-blue-200 text-xs">"Walking in Faith" begins this Sunday</p>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-white/30 text-white hover:bg-white/20"
                >
                  View Full Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}