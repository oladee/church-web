import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Clock, Users, MapPin, BookOpen, Heart, Calendar } from "lucide-react";
import prophetWorshipImage from "figma:asset/0a48bafc3d8fd4f05aeae6647aaa440da8fc633e.png";
import weddingImage from "figma:asset/18cea1279b9814c2211d2e77f08f64b2fdd3abe2.png";

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section - Prophet Nana */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <div className="lg:order-2">
            <div className="relative">
              <img
                src={prophetWorshipImage}
                alt="Prophet Nana Akwasis Sarfo in worship"
                className="w-full h-[600px] object-cover object-center rounded-2xl shadow-brand-purple"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:order-1">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading mb-4">
                  About Prophet Nana Akwasis Sarfo
                </h2>
                <p className="text-lg mb-6">
                  A man of God with over 20 years of ministry experience, Prophet Nana Akwasis Sarfo has dedicated his life to serving the Kingdom of God and ministering to people from all walks of life.
                </p>
                <p className="mb-6">
                  Originally from Ghana and now based in Canada, Prophet Nana brings a unique blend of cultural wisdom and biblical truth to his ministry. His platform has been established for 5 years, reaching countless lives through powerful messages, healing prayers, and prophetic ministry.
                </p>
                <p className="mb-8">
                  Prophet Nana holds a Master's degree in Theology and serves alongside his wife, First Lady Phyllis Nugent Sarfo, who holds a Master's in Nursing. Together, they are blessed with two sons: Maxwell and Andrew.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Card className="border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-brand-purple mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-brand-navy mb-1">20+</div>
                    <div className="text-brand-gray">Years of Ministry</div>
                  </CardContent>
                </Card>
                <Card className="border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-brand-purple mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-brand-navy mb-1">5</div>
                    <div className="text-brand-gray">Years Platform</div>
                  </CardContent>
                </Card>
                <Card className="border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-brand-purple mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-brand-navy mb-1">Canada</div>
                    <div className="text-brand-gray">Based in Toronto</div>
                  </CardContent>
                </Card>
                <Card className="border-brand-purple/20 hover:shadow-brand-purple transition-shadow">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-8 h-8 text-brand-purple mx-auto mb-3" />
                    <div className="text-2xl font-semibold text-brand-navy mb-1">M.Th</div>
                    <div className="text-brand-gray">Masters Theology</div>
                  </CardContent>
                </Card>
              </div>

              {/* Ministry Vision */}
              <div className="bg-brand-gray-light p-6 rounded-xl">
                <h4 className="font-heading text-xl text-brand-navy mb-3">Our Vision</h4>
                <p className="text-brand-gray italic">
                  "To raise a generation of believers who walk in the fullness of God's power, equipped to impact their communities and nations for the Kingdom of Heaven."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Ministry Partnership */}
        <div className="text-center space-y-8">


          {/* Image with Text Overlay */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <img
              src={weddingImage}
              alt="Prophet Nana and First Lady Phyllis wedding photo"
              className="w-full h-[600px] lg:h-[700px] object-cover object-top"
            />
            
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
              <div className="max-w-2xl mx-auto text-center space-y-4">
                {/* Covenant Partnership Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                  <Heart className="w-5 h-5 text-brand-gold mr-2" />
                  <span className="text-brand-gold font-semibold">Covenant Partnership</span>
                </div>
                
                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-text-lg">
                  United in Purpose
                </h3>
                
                {/* Quote */}
                <p className="text-lg sm:text-xl text-gray-100 italic drop-shadow-text-md max-w-xl mx-auto">
                  "Two are better than one, because they have a good return for their labor"
                </p>
                
                {/* Scripture Reference */}
                <p className="text-sm text-gray-200 drop-shadow-text-sm">
                  - Ecclesiastes 4:9
                </p>
              </div>
            </div>
          </div>

          {/* CTA Content */}
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <Button 
              size="lg" 
              className="bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold px-12 py-4 text-xl rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-6 h-6 mr-3" />
              Connect with Our Leaders
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}