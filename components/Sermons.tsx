import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, Calendar, Clock, Download, Share2, BookOpen, Mic, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import preachingImage from "figma:asset/631f76341b0c8256d0f28bf2fbb80c405e5b59d3.png";

export function Sermons() {
  const featuredSermon = {
    id: 1,
    title: "Breaking Generational Curses",
    description: "Discover how to identify and break free from generational patterns that have held your family line captive. This powerful message reveals the keys to walking in freedom.",
    preacher: "Prophet Nana Akwasis Sarfo",
    date: "January 21, 2025",
    duration: "45 mins",
    series: "Freedom Series",
    isNew: true,
    views: "2.3K"
  };

  const recentSermons = [
    {
      id: 2,
      title: "The Power of Persistent Prayer",
      preacher: "Prophet Nana Akwasis Sarfo",
      date: "January 14, 2025",
      duration: "38 mins",
      series: "Prayer Life",
      views: "1.8K"
    },
    {
      id: 3,
      title: "Walking in Divine Favor",
      preacher: "Prophet Nana Akwasis Sarfo",
      date: "January 7, 2025",
      duration: "42 mins",
      series: "Favor Series",
      views: "2.1K"
    },
    {
      id: 4,
      title: "Spiritual Warfare Strategies",
      preacher: "Prophet Nana Akwasis Sarfo",
      date: "December 31, 2024",
      duration: "52 mins",
      series: "Victory Series",
      views: "3.2K"
    },
    {
      id: 5,
      title: "The Heart of Worship",
      preacher: "First Lady Phyllis Nugent Sarfo",
      date: "December 24, 2024",
      duration: "35 mins",
      series: "Worship Series",
      views: "1.9K"
    },
    {
      id: 6,
      title: "Prophetic Activation",
      preacher: "Prophet Nana Akwasis Sarfo",
      date: "December 17, 2024",
      duration: "48 mins",
      series: "Prophetic Series",
      views: "2.7K"
    }
  ];

  return (
    <section id="sermons" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-brand-purple mr-3" />
            <span className="text-brand-purple font-semibold tracking-wide uppercase text-sm">Messages</span>
          </div>
          <h2 className="font-heading mb-4">
            Be Fed by the Word
          </h2>
          <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Experience life-transforming messages that will strengthen your faith, 
            empower your walk with God, and equip you for Kingdom living.
          </p>
        </div>

        {/* Featured Sermon */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="lg:order-1">
              <div className="relative">
                <img
                  src={preachingImage}
                  alt="Prophet Nana Akwasis Sarfo preaching"
                  className="w-full h-[500px] object-cover object-center rounded-2xl shadow-brand-purple"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 hover:bg-white text-brand-purple rounded-full w-20 h-20 p-0 shadow-lg hover:scale-105 transition-all">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>

                {/* Live Badge */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-red-600 text-white px-3 py-1 animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></div>
                    LIVE Ministry
                  </Badge>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-brand-gray">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1 text-brand-purple" />
                          {featuredSermon.views} views
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-brand-purple" />
                          {featuredSermon.duration}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:order-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {featuredSermon.isNew && (
                    <Badge className="bg-brand-purple text-white">New</Badge>
                  )}
                  <Badge variant="outline" className="border-brand-gold text-brand-gold">
                    {featuredSermon.series}
                  </Badge>
                </div>

                <h3 className="font-heading text-3xl text-brand-navy mb-4">
                  {featuredSermon.title}
                </h3>
                
                <p className="text-lg text-brand-gray mb-6">
                  {featuredSermon.description}
                </p>
              </div>

              {/* Sermon Details */}
              <div className="space-y-4">
                <div className="flex items-center text-brand-gray">
                  <Mic className="w-5 h-5 text-brand-purple mr-3" />
                  <span className="font-medium">{featuredSermon.preacher}</span>
                </div>
                <div className="flex items-center text-brand-gray">
                  <Calendar className="w-5 h-5 text-brand-purple mr-3" />
                  <span>{featuredSermon.date}</span>
                </div>
                <div className="flex items-center text-brand-gray">
                  <Clock className="w-5 h-5 text-brand-purple mr-3" />
                  <span>{featuredSermon.duration}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-3">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Now
                </Button>
                <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-3">
                  <Download className="w-5 h-5 mr-2" />
                  Download Audio
                </Button>
              </div>

              {/* Sermon Quote */}
              <div className="bg-brand-gray-light p-6 rounded-xl border-l-4 border-brand-purple">
                <p className="text-brand-navy italic font-medium">
                  "When we understand our authority in Christ, we can break every chain that the enemy has used to bind our families for generations."
                </p>
                <p className="text-brand-gray text-sm mt-2">- Prophet Nana Akwasis Sarfo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Sermons Grid */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl text-brand-navy mb-8 text-center">Recent Messages</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentSermons.map((sermon) => (
              <Card key={sermon.id} className="hover:shadow-brand-purple transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-brand-gold text-brand-gold text-xs">
                      {sermon.series}
                    </Badge>
                    <div className="text-xs text-brand-gray">{sermon.views} views</div>
                  </div>
                  <CardTitle className="text-lg font-heading text-brand-navy group-hover:text-brand-purple transition-colors line-clamp-2">
                    {sermon.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-brand-gray">
                      <Mic className="w-4 h-4 mr-2 text-brand-purple" />
                      {sermon.preacher}
                    </div>
                    <div className="flex items-center justify-between text-sm text-brand-gray">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-brand-purple" />
                        {sermon.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-brand-purple" />
                        {sermon.duration}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-brand-purple hover:bg-brand-purple-dark text-white">
                      <Play className="w-4 h-4 mr-1" />
                      Watch
                    </Button>
                    <Button size="sm" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-brand-cream p-8 rounded-2xl shadow-brand max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl text-brand-navy mb-4">
              Never Miss a Message
            </h3>
            <p className="text-brand-gray mb-6">
              Subscribe to our sermon podcast or follow us on social media to receive notifications 
              when new messages are available. Be the first to hear what God is saying to His people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white px-8">
                Subscribe to Podcast
              </Button>
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8">
                View All Messages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}