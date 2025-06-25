import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin, Users, Video, ExternalLink } from "lucide-react";
import spiritOfJezebelImage from "figma:asset/8c5ca4dd551902ade2496e26f14521d7464c8258.png";
import morningDevotionImage from "figma:asset/3aaec4a649181da5c7a4b482bd992ec2b09d9954.png";

export function Events() {
  const featuredEvents = [
    {
      id: 1,
      title: "Spirit of Jezebel",
      description: "Join us every Tuesday for powerful teaching and deliverance ministry as we expose and break the spirit of Jezebel in our lives and communities.",
      image: spiritOfJezebelImage,
      date: "Every Tuesday",
      time: "8:00 PM EST",
      location: "Springlife Worship Center",
      type: "Weekly Teaching",
      isOnline: false,
      isFeatured: true
    },
    {
      id: 2,
      title: "Morning Devotion",
      description: "Start your day right with powerful morning devotions, prayers, and the Word of God. Join us online for this transformative time of worship.",
      image: morningDevotionImage,
      date: "Daily",
      time: "5:00 AM - 7:00 AM EST",
      location: "Online via Zoom",
      meetingId: "33833800012",
      type: "Daily Devotion",
      isOnline: true,
      isFeatured: true
    }
  ];

  const upcomingEvents = [
    {
      id: 3,
      title: "Sunday Worship Service",
      date: "January 26, 2025",
      time: "10:00 AM & 6:00 PM",
      location: "Springlife Worship Center",
      type: "Sunday Service",
      description: "Join us for powerful worship, anointed preaching, and divine encounters."
    },
    {
      id: 4,
      title: "Prayer & Fasting Week",
      date: "February 3-10, 2025",
      time: "6:00 AM - 6:00 PM",
      location: "Church & Online",
      type: "Special Event",
      description: "Seven days of intensive prayer and fasting for breakthrough and revival."
    },
    {
      id: 5,
      title: "Youth Conference 2025",
      date: "February 15-16, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Springlife Worship Center",
      type: "Youth Event",
      description: "Empowering the next generation with vision, purpose, and Kingdom principles."
    },
    {
      id: 6,
      title: "Women of Worth Conference",
      date: "March 8, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Center",
      type: "Women's Event",
      description: "Celebrating and empowering women to walk in their divine purpose and calling."
    }
  ];

  return (
    <section id="events" className="section-padding bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading mb-4">
            Upcoming Events &amp; Programs
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Join us for life-changing events, powerful teachings, and divine encounters. 
            Be part of a community that's passionate about growing in God and impacting lives.
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl text-brand-navy mb-8 text-center">Featured Programs</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-brand-purple transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-purple text-white">
                      {event.type}
                    </Badge>
                  </div>
                  {event.isOnline && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-brand-navy">
                        <Video className="w-3 h-3 mr-1" />
                        Online
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-heading text-xl text-brand-navy mb-2">{event.title}</h4>
                      <p className="text-brand-gray text-sm">{event.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-brand-gray">
                        <Calendar className="w-4 h-4 mr-2 text-brand-purple" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-brand-gray">
                        <Clock className="w-4 h-4 mr-2 text-brand-purple" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-brand-gray">
                        <MapPin className="w-4 h-4 mr-2 text-brand-purple" />
                        {event.location}
                      </div>
                      {event.meetingId && (
                        <div className="flex items-center text-sm text-brand-gray">
                          <Video className="w-4 h-4 mr-2 text-brand-purple" />
                          Meeting ID: {event.meetingId}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="bg-brand-purple hover:bg-brand-purple-dark text-white flex-1">
                        {event.isOnline ? "Join Online" : "Register Now"}
                      </Button>
                      <Button size="sm" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events Grid */}
        <div>
          <h3 className="font-heading text-2xl text-brand-navy mb-8 text-center">Upcoming Events</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-brand-purple transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-heading text-brand-navy group-hover:text-brand-purple transition-colors">
                      {event.title}
                    </CardTitle>
                    <Badge variant="outline" className="border-brand-purple text-brand-purple text-xs">
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-brand-gray text-sm mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-brand-gray">
                      <Calendar className="w-4 h-4 mr-2 text-brand-purple" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-brand-gray">
                      <Clock className="w-4 h-4 mr-2 text-brand-purple" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-brand-gray">
                      <MapPin className="w-4 h-4 mr-2 text-brand-purple" />
                      {event.location}
                    </div>
                  </div>

                  <Button size="sm" variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-brand max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl text-brand-navy mb-4">
              Don't Miss Out on God's Move
            </h3>
            <p className="text-brand-gray mb-6">
              Stay connected with all our events and be the first to know about special services, 
              conferences, and divine appointments scheduled throughout the year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white px-8">
                <Users className="w-4 h-4 mr-2" />
                Join Our Community
              </Button>
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}