import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Calendar, MapPin, Clock, Heart, BookOpen, HandHeart, Globe, UserCheck } from "lucide-react";
import communityServiceImage from "figma:asset/b46667a8628a92fe9ac6798e145c4c2af27d5700.png";

export function Groups() {
  const ministryGroups = [
    {
      id: 1,
      name: "Core Team",
      description: "The foundational leadership team that guides the vision and direction of the ministry",
      leader: "Prophet Nana Akwasis Sarfo",
      members: "12+",
      meetingTime: "First Sunday of the month",
      location: "Church Office",
      icon: UserCheck,
      color: "purple"
    },
    {
      id: 2,
      name: "Prayer Team",
      description: "Dedicated intercessors who stand in the gap through prayer and spiritual warfare",
      leader: "Elder Sarah Johnson",
      members: "25+",
      meetingTime: "Wednesdays 6:00 PM",
      location: "Prayer Room",
      icon: HandHeart,
      color: "purple"
    },
    {
      id: 3,
      name: "Leaders Ministry",
      description: "Equipping and developing emerging leaders for effective Kingdom service",
      leader: "Pastor Michael Thompson",
      members: "18+",
      meetingTime: "Saturdays 10:00 AM",
      location: "Conference Room",
      icon: Users,
      color: "purple"
    },
    {
      id: 4,
      name: "School of Ministry",
      description: "Comprehensive biblical training for those called to ministry and spiritual growth",
      leader: "Prophet Nana Akwasis Sarfo",
      members: "35+",
      meetingTime: "Tuesdays 7:00 PM",
      location: "Main Sanctuary",
      icon: BookOpen,
      color: "purple"
    },
    {
      id: 5,
      name: "Missionary Team",
      description: "Spreading the Gospel locally and internationally through outreach missions",
      leader: "Minister Grace Adams",
      members: "20+",
      meetingTime: "Monthly Planning",
      location: "Various Locations",
      icon: Globe,
      color: "purple"
    },
    {
      id: 6,
      name: "Financial Pillars",
      description: "Stewarding resources and supporting the financial vision of the ministry",
      leader: "Deacon Robert Wilson",
      members: "15+",
      meetingTime: "Second Sunday",
      location: "Board Room",
      icon: Heart,
      color: "purple"
    },
    {
      id: 7,
      name: "Singles Ministry",
      description: "Supporting unmarried believers in their spiritual growth and community connection",
      leader: "Minister Lisa Davis",
      members: "30+",
      meetingTime: "Fridays 7:00 PM",
      location: "Youth Center",
      icon: Users,
      color: "purple"
    },
    {
      id: 8,
      name: "Marriage Ministry",
      description: "Strengthening marriages and families through biblical principles and fellowship",
      leader: "First Lady Phyllis Nugent Sarfo",
      members: "25+",
      meetingTime: "Second Saturday",
      location: "Fellowship Hall",
      icon: Heart,
      color: "purple"
    },
    {
      id: 9,
      name: "Men of Valor",
      description: "Empowering men to be godly leaders in their homes, workplaces, and communities",
      leader: "Deacon James Mitchell",
      members: "40+",
      meetingTime: "First Saturday 8:00 AM",
      location: "Men's Center",
      icon: Users,
      color: "purple"
    },
    {
      id: 10,
      name: "Woman Within",
      description: "Nurturing the unique calling and purpose of women in ministry and life",
      leader: "First Lady Phyllis Nugent Sarfo",
      members: "50+",
      meetingTime: "Third Saturday 10:00 AM",
      location: "Women's Center",
      icon: Heart,
      color: "purple"
    }
  ];

  return (
    <section id="groups" className="section-padding bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading mb-4">
            Ministry Groups &amp; Departments
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Find your place in the body of Christ. Join one of our ministry groups and 
            connect with like-minded believers as you grow in faith and serve the Kingdom together.
          </p>
        </div>

        {/* Community Service Highlight */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <HandHeart className="w-6 h-6 text-brand-purple mr-3" />
                  <span className="text-brand-purple font-semibold tracking-wide uppercase text-sm">Community Service</span>
                </div>
                <h3 className="font-heading text-3xl text-brand-navy mb-6">
                  Serving Our Community Together
                </h3>
                <p className="text-lg mb-6">
                  Our ministry groups don't just meet for fellowship—we actively serve our community. 
                  Through coordinated outreach efforts, we provide practical support to families and 
                  individuals in need, demonstrating God's love through action.
                </p>
                <p className="mb-8">
                  Prophet Nana and First Lady Phyllis lead by example, regularly organizing community 
                  service initiatives where all our ministry groups come together to make a tangible 
                  difference in people's lives.
                </p>
              </div>

              {/* Service Stats */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
                  <CardContent className="p-6 text-center">
                    <HandHeart className="w-8 h-8 text-brand-purple mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-brand-navy mb-1">Monthly</div>
                    <div className="text-brand-gray text-sm">Community Outreach</div>
                  </CardContent>
                </Card>
                <Card className="border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-brand-purple mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-brand-navy mb-1">All Groups</div>
                    <div className="text-brand-gray text-sm">Participate Together</div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-brand">
                <h4 className="font-heading text-xl text-brand-navy mb-3">Our Service Heart</h4>
                <p className="text-brand-gray italic">
                  "Ministry is not just about what happens within the church walls. True ministry 
                  extends into our communities, meeting people where they are and showing them the 
                  practical love of Jesus Christ."
                </p>
              </div>
            </div>

            {/* Community Service Image */}
            <div className="lg:order-last">
              <div className="relative">
                <img
                  src={communityServiceImage}
                  alt="Prophet Nana and First Lady Phyllis serving the community"
                  className="w-full h-[500px] object-cover object-top rounded-2xl shadow-brand-purple"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-brand-purple text-white px-4 py-2">
                    Community Impact
                  </Badge>
                </div>

                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h4 className="font-heading text-lg text-brand-navy mb-2">
                      Hands-On Ministry
                    </h4>
                    <p className="text-brand-gray text-sm">
                      Regular community service bringing hope and practical help to families in need
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ministry Groups Grid */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl text-center text-brand-navy mb-8">Join a Ministry Group</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministryGroups.map((group) => (
              <Card key={group.id} className="hover:shadow-brand-purple transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <group.icon className="w-8 h-8 text-brand-purple" />
                    <Badge 
                      variant="outline" 
                      className="border-brand-purple text-brand-purple text-xs"
                    >
                      {group.members} Members
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading text-brand-navy group-hover:text-brand-purple transition-colors">
                    {group.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-brand-gray text-sm">{group.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-brand-gray">
                      <Users className="w-3 h-3 mr-2 text-brand-purple" />
                      <span className="font-medium">Leader:</span>
                      <span className="ml-1">{group.leader}</span>
                    </div>
                    <div className="flex items-center text-xs text-brand-gray">
                      <Clock className="w-3 h-3 mr-2 text-brand-purple" />
                      <span className="font-medium">Meets:</span>
                      <span className="ml-1">{group.meetingTime}</span>
                    </div>
                    <div className="flex items-center text-xs text-brand-gray">
                      <MapPin className="w-3 h-3 mr-2 text-brand-purple" />
                      <span className="font-medium">Location:</span>
                      <span className="ml-1">{group.location}</span>
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white"
                  >
                    Join This Group
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-brand max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl text-brand-navy mb-4">
              Ready to Get Connected?
            </h3>
            <p className="text-brand-gray mb-6">
              Don't walk this journey alone. Whether you're new to faith or looking to deepen 
              your spiritual growth, there's a place for you in our ministry family. 
              Connect with a group that aligns with your calling and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white px-8">
                <Users className="w-4 h-4 mr-2" />
                Find My Group
              </Button>
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8">
                Contact Ministry Leader
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}