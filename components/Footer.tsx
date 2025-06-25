import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Heart,
  ChevronRight,
  Calendar,
  BookOpen,
  Users,
  Crown
} from "lucide-react";
import churchLogo from "figma:asset/20c3d1783fcf424e26a56c9bef434de8dc87f58c.png";

export function Footer() {
  const quickLinks = [
    { name: "About Prophet Nana", href: "#about" },
    { name: "Our Ministry", href: "#ministry" },
    { name: "Leadership Team", href: "#leadership" },
    { name: "Ministry History", href: "#history" },
    { name: "Join Us", href: "#join" },
    { name: "Contact Us", href: "#contact" }
  ];

  const ministries = [
    { name: "Core Team", href: "#groups" },
    { name: "Leaders Ministry", href: "#groups" },
    { name: "Prayer Team", href: "#groups" },
    { name: "School of Ministry", href: "#groups" },
    { name: "Men of Valor", href: "#groups" },
    { name: "Woman Within", href: "#groups" }
  ];

  const resources = [
    { name: "Recent Messages", href: "#sermons" },
    { name: "Prophetic Words", href: "#prophecy" },
    { name: "Prayer Requests", href: "#prayer" },
    { name: "Online Giving", href: "#give" },
    { name: "Event Calendar", href: "#events" },
    { name: "Ministry School", href: "#school" }
  ];

  const serviceSchedule = [
    { service: "Sunday Morning", time: "10:00 AM", location: "Main Sanctuary" },
    { service: "Sunday Evening", time: "6:00 PM", location: "Main Sanctuary" },
    { service: "Wednesday Bible Study", time: "7:00 PM", location: "Fellowship Hall" },
    { service: "Friday Power Night", time: "7:30 PM", location: "Main Sanctuary" }
  ];

  return (
    <footer className="bg-brand-navy text-white">
      {/* Contact Information Card Section - Moved from PastorMessage */}
      <div className="bg-slate-900 border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Connect With Us</h3>
                <p className="text-gray-300">Visit us, call us, or join us for worship</p>
              </div>
              
              {/* Mobile: Stack vertically with center alignment, Desktop: 3 columns */}
              <div className="flex flex-col space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8">
                {/* Sunday Services */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 bg-brand-purple/20 border border-brand-purple/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-brand-purple-light" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Sunday Services</p>
                    <p className="text-gray-300">10:00 AM & 6:00 PM</p>
                    <p className="text-gray-400 text-sm">Main Sanctuary</p>
                  </div>
                </div>
                
                {/* Call Us */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 bg-brand-gold/20 border border-brand-gold/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-gold-light" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Call Us</p>
                    <a href="tel:+15551234673" className="text-gray-300 hover:text-brand-gold transition-colors">
                      (555) 123-WORD
                    </a>
                    <p className="text-gray-400 text-sm">Available Daily</p>
                  </div>
                </div>
                
                {/* Visit Us */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 bg-brand-purple/20 border border-brand-purple/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-purple-light" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Visit Us</p>
                    <p className="text-gray-300">Toronto, Ontario</p>
                    <p className="text-gray-400 text-sm">Canada</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Ministry Info Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={churchLogo} 
                alt="Prophet Nana Ministry" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-heading text-brand-gold">
                  Prophet Nana Ministry
                </h3>
                <p className="text-blue-200 text-sm">Established by Divine Grace</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6 leading-relaxed">
              A prophetic ministry platform established 5 years ago under the leadership 
              of Prophet Nana Akwasis Sarfo, reaching nations with the Gospel of Jesus Christ 
              and developing spiritual leaders for kingdom advancement.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-brand-gold flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Toronto, Ontario</p>
                  <p className="text-blue-100">Canada</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-gold" />
                <a href="tel:+15551234673" className="text-blue-100 hover:text-brand-gold transition-colors">
                  (555) 123-WORD
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-gold" />
                <a href="mailto:info@prophetnanaministry.org" className="text-blue-100 hover:text-brand-gold transition-colors">
                  info@prophetnanaministry.org
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-brand-gold mb-4 font-semibold">Follow Our Ministry</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-brand-blue-light rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-blue-light rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-blue-light rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-blue-light rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-gold mb-6 font-semibold text-lg flex items-center">
              <Crown className="w-5 h-5 mr-2" />
              About Ministry
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-blue-100 hover:text-brand-gold transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-brand-gold mb-6 font-semibold text-lg flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Ministry Departments
            </h4>
            <ul className="space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a 
                    href={ministry.href} 
                    className="text-blue-100 hover:text-brand-gold transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {ministry.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="text-brand-gold mb-4 font-semibold">Service Schedule</h5>
              <div className="space-y-3">
                {serviceSchedule.map((schedule, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex items-center text-blue-100 mb-1">
                      <Clock className="w-4 h-4 mr-2 text-brand-gold" />
                      <span className="font-medium">{schedule.service}</span>
                    </div>
                    <div className="pl-6 text-blue-200 text-xs">
                      {schedule.time} • {schedule.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h4 className="text-brand-gold mb-6 font-semibold text-lg flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Ministry Resources
            </h4>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-blue-100 hover:text-brand-gold transition-colors flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-brand-blue-light rounded-lg p-6">
              <h5 className="text-brand-gold mb-3 font-semibold">Ministry Updates</h5>
              <p className="text-blue-100 text-sm mb-4">
                Receive prophetic words, ministry updates, and event notifications.
              </p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-brand-gold"
                />
                <Button className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Prophet Nana Akwasis Sarfo Ministry. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-blue-200 text-sm">
              <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Ministry Partnership</a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-800 text-center">
            <p className="text-blue-200 text-sm flex items-center justify-center">
              Established by <Heart className="w-4 h-4 mx-1 text-brand-gold" /> Divine Grace • 5 Years of Ministry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}