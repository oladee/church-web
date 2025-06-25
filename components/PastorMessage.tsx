import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Quote, Star, ArrowRight, Users, Shield, Sparkles } from "lucide-react";
import ministryLeadersImage from "figma:asset/4f1955da60acb83963ce10582349ba079c6a8c74.png";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PastorMessage() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900">
      {/* Modern Background with Fallback */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful church interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-brand-navy/95"></div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 border border-brand-purple rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 border border-brand-gold rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 lg:items-stretch">
          
          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-12 lg:flex lg:flex-col lg:justify-center">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-purple/20 backdrop-blur-sm border border-brand-purple/30 rounded-xl">
                  <Quote className="w-6 h-6 text-brand-purple-light" />
                </div>
                <div>
                  <p className="text-brand-purple-light font-medium uppercase tracking-wider text-sm">
                    A Message from Our Leaders
                  </p>
                  <div className="h-0.5 w-20 bg-gradient-to-r from-brand-purple-light to-brand-gold mt-2"></div>
                </div>
              </div>
              
              {/* Fixed heading structure with reliable gradient */}
              <div className="space-y-3">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Welcome to the
                </h2>
                {/* Using a more reliable gradient approach */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight relative">
                  <span className="text-brand-purple-light">Springlife</span>{' '}
                  <span className="text-brand-gold">Family</span>
                </h2>
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-8 lg:flex-1 lg:flex lg:flex-col lg:justify-center">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <blockquote className="text-xl lg:text-2xl text-white/95 leading-relaxed italic mb-6">
                    "We are so blessed to have you join our spiritual family. At Springlife Worship Center, 
                    we believe that every person who walks through our doors—whether physically or virtually—is 
                    divinely appointed by God for such a time as this."
                  </blockquote>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our heart's desire is to see you grow in your relationship with Jesus Christ, discover your God-given 
                    purpose, and walk in the fullness of His power and love. We are committed to providing a safe space 
                    where you can encounter God's presence and connect with a supportive community.
                  </p>
                </CardContent>
              </Card>



              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="group bg-brand-purple hover:bg-brand-purple-dark text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Schedule a Meeting
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                {/* Updated Join Prayer List button with white text and border */}
                <Button className="group relative bg-transparent border-2 border-white hover:bg-white text-white hover:text-brand-purple font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    Join Prayer List
                  </span>
                </Button>
              </div>


            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 lg:flex lg:items-stretch">
            <div className="relative group w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/20 to-brand-gold/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full lg:min-h-[700px]">
                <img
                  src={ministryLeadersImage}
                  alt="Prophet Nana Akwasis Sarfo and First Lady Phyllis Nugent Sarfo"
                  className="w-full h-[600px] lg:h-full lg:min-h-[700px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Leadership Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="bg-black/70 backdrop-blur-md border border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-brand-purple/20 border border-brand-purple/30 rounded-xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-brand-purple-light" />
                        </div>
                        <div>
                          <p className="text-brand-purple-light font-medium text-sm">Ministry Leadership</p>
                          <div className="h-0.5 w-16 bg-gradient-to-r from-brand-purple-light to-brand-gold mt-1"></div>
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-xl mb-2">
                        Serving Together in Unity
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        United in purpose, vision, and calling to impact lives for God's Kingdom through love and service
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-gold/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-purple/30 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}