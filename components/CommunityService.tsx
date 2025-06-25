import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Hand, Heart, Users, MapPin, Clock, Calendar, Phone, Mail, HandHeart, Globe, Gift } from "lucide-react";
import communityOutreachImage from "figma:asset/efb77859138ce61fa19607749ea809145855971a.png";

const impactStats = [
  {
    icon: Users,
    number: "500+",
    label: "Families Served Monthly"
  },
  {
    icon: Gift,
    number: "12",
    label: "Community Programs"
  },
  {
    icon: Globe,
    number: "15",
    label: "Partner Organizations"
  },
  {
    icon: Heart,
    number: "24/7",
    label: "Support Available"
  }
];

const servicePrograms = [
  {
    title: "Food Distribution",
    description: "Monthly food drives providing essential groceries and fresh produce to families in need",
    icon: Gift,
    schedule: "Every 2nd Saturday, 10 AM - 2 PM",
    location: "Church Main Hall"
  },
  {
    title: "Clothing Drive",
    description: "Seasonal clothing collection and distribution for all ages, including winter coats and school supplies",
    icon: Heart,
    schedule: "Quarterly Events",
    location: "Community Center"
  },
  {
    title: "Back-to-School Support",
    description: "Providing school supplies, backpacks, and uniforms to help children start the school year prepared",
    icon: Users,
    schedule: "August - September",
    location: "Various Locations"
  },
  {
    title: "Emergency Assistance",
    description: "Immediate support for families facing crisis situations including rent, utilities, and medical needs",
    icon: HandHeart,
    schedule: "Available Year-Round",
    location: "By Appointment"
  }
];

export function CommunityService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-brand-purple via-brand-purple-dark to-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full mr-4">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <span className="text-brand-gold font-semibold tracking-wide uppercase text-sm">Serving Our Community</span>
            </div>
            <h1 className="font-heading text-4xl lg:text-5xl mb-6">
              Community Service Ministry
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Extending God's love beyond the church walls through practical service, 
              compassionate care, and community support programs.
            </p>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <HandHeart className="w-6 h-6 text-brand-purple mr-3" />
                  <span className="text-brand-purple font-semibold tracking-wide uppercase text-sm">Community Impact</span>
                </div>
                <h2 className="font-heading text-3xl text-brand-navy mb-6">
                  Your Support in Action
                </h2>
                <p className="text-lg mb-6">
                  Through the faithful partnership of our church family, we've been able to extend God's love beyond the church walls. 
                  Our community outreach programs provide food, clothing, and essential supplies to families in need.
                </p>
                <p className="mb-8">
                  First Lady Phyllis leads our community service initiatives, working directly with local families 
                  to ensure that practical needs are met while sharing the hope of the Gospel.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid sm:grid-cols-2 gap-4">
                {impactStats.map((stat, index) => (
                  <Card key={index} className="border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
                    <CardContent className="p-6 text-center">
                      <stat.icon className="w-8 h-8 text-brand-purple mx-auto mb-3" />
                      <div className="text-2xl font-semibold text-brand-navy mb-1">{stat.number}</div>
                      <div className="text-brand-gray text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-brand-gray-light p-6 rounded-xl">
                <h4 className="font-heading text-xl text-brand-navy mb-3">Recent Outreach</h4>
                <p className="text-brand-gray italic mb-4">
                  "It fills our hearts with joy to see the smiles on families' faces when they receive support. 
                  This is what ministry is all about—showing God's love through practical action."
                </p>
                <p className="text-brand-gray font-semibold">- First Lady Phyllis Nugent Sarfo</p>
              </div>
            </div>

            {/* Community Image */}
            <div className="lg:order-last">
              <div className="relative">
                <img
                  src={communityOutreachImage}
                  alt="First Lady Phyllis distributing food and supplies to community members"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-brand-purple"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-brand-purple text-white px-4 py-2">
                    Community Service
                  </Badge>
                </div>

                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h4 className="font-heading text-lg text-brand-navy mb-2">
                      Making a Difference Together
                    </h4>
                    <p className="text-brand-gray text-sm">
                      Monthly food distribution reaching families across multiple communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Programs */}
      <section className="section-padding bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading mb-4">Our Service Programs</h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
              We offer various programs throughout the year to meet the diverse needs of our community. 
              Each program is designed to provide practical support while sharing God's love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicePrograms.map((program, index) => (
              <Card key={index} className="border-brand-purple/20 hover:shadow-brand-purple transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brand-purple/10 rounded-full mr-4">
                      <program.icon className="w-6 h-6 text-brand-purple" />
                    </div>
                    <CardTitle className="text-xl font-heading text-brand-navy">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-brand-gray">{program.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-brand-gray">
                      <Clock className="w-4 h-4 mr-2 text-brand-purple" />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-brand-gray">
                      <MapPin className="w-4 h-4 mr-2 text-brand-purple" />
                      <span>{program.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading mb-4">Get Involved</h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
              Join us in making a difference in our community. There are many ways to volunteer 
              and support our outreach efforts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Volunteer */}
            <Card className="text-center border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
              <CardContent className="p-8">
                <div className="p-4 bg-brand-purple/10 rounded-full w-fit mx-auto mb-6">
                  <Users className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-heading text-xl text-brand-navy mb-4">Volunteer</h3>
                <p className="text-brand-gray mb-6">
                  Help with food distribution, clothing drives, and community events. 
                  Your time and skills make a real difference.
                </p>
                <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white w-full">
                  Join Our Team
                </Button>
              </CardContent>
            </Card>

            {/* Donate */}
            <Card className="text-center border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
              <CardContent className="p-8">
                <div className="p-4 bg-brand-purple/10 rounded-full w-fit mx-auto mb-6">
                  <Gift className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-heading text-xl text-brand-navy mb-4">Donate</h3>
                <p className="text-brand-gray mb-6">
                  Support our programs with financial contributions or donations of food, 
                  clothing, and other essential items.
                </p>
                <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white w-full">
                  Make a Donation
                </Button>
              </CardContent>
            </Card>

            {/* Partner */}
            <Card className="text-center border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
              <CardContent className="p-8">
                <div className="p-4 bg-brand-purple/10 rounded-full w-fit mx-auto mb-6">
                  <HandHeart className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="font-heading text-xl text-brand-navy mb-4">Partner</h3>
                <p className="text-brand-gray mb-6">
                  Organizations and businesses can partner with us to expand our reach 
                  and impact in the community.
                </p>
                <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white w-full">
                  Become a Partner
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading mb-6">Have Questions?</h2>
          <p className="text-lg text-brand-gray mb-8">
            Contact First Lady Phyllis or our Community Service team to learn more about 
            our programs or how you can get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white px-8">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
            <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}