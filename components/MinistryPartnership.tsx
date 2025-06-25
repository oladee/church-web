import { Button } from "./ui/button";
import { ArrowLeft, Users, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import weddingImage from "figma:asset/18cea1279b9814c2211d2e77f08f64b2fdd3abe2.png";

export function MinistryPartnership() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/20 hover:text-white border border-white/30 hover:border-white/50 mr-4 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
              Ministry Partnership
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content - Image with Text Overlay and CTA */}
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  );
}