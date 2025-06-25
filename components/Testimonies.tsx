import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote, Star } from "lucide-react";

export function Testimonies() {
  const testimonies = [
    {
      id: 1,
      name: "Sarah Martinez",
      role: "Mother of 3",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimony: "Springlife Worship Center has been a beacon of hope for our family. The children's ministry has helped my kids grow in their faith, and the community support during my husband's illness was overwhelming. This is truly a family church.",
      rating: 5,
      ministry: "Children's Ministry"
    },
    {
      id: 2,
      name: "David Thompson",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimony: "I was searching for meaning in my life when a friend invited me to Springlife. Pastor Michael's messages spoke directly to my heart, and the men's ministry gave me the accountability I needed to grow spiritually.",
      rating: 5,
      ministry: "Men's Ministry"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "College Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimony: "The youth ministry at Springlife shaped who I am today. Even in college, I carry the biblical foundation and friendships I built here. This church family will always be home to me.",
      rating: 5,
      ministry: "Youth Ministry"
    },
    {
      id: 4,
      name: "Robert and Linda Chen",
      role: "Married 35 Years",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
      testimony: "We've been part of Springlife for over 15 years. This church has walked with us through celebrations and challenges. The marriage ministry strengthened our relationship and helped us mentor other couples.",
      rating: 5,
      ministry: "Marriage Ministry"
    },
    {
      id: 5,
      name: "Jennifer Park",
      role: "Single Mother",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      testimony: "As a single mom, I found not just a church but a support system. The women's ministry embraced me, and the prayer group lifted me up during my toughest seasons. God's love is so evident here.",
      rating: 5,
      ministry: "Women's Ministry"
    },
    {
      id: 6,
      name: "Michael Johnson Jr.",
      role: "Recent Graduate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimony: "Growing up as a pastor's kid could have been challenging, but this congregation loved me for who I was. The youth leaders invested in my life, and now I'm pursuing ministry myself because of their example.",
      rating: 5,
      ministry: "Youth Ministry"
    }
  ];

  return (
    <section id="testimonies" className="section-padding bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading text-brand-navy mb-6">
            Stories of Faith
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Hear from our church family about how God is working in their lives and 
            how our community has been a blessing to them on their faith journey.
          </p>
        </div>

        {/* Testimonies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonies.map((testimony) => (
            <Card key={testimony.id} className="bg-white shadow-brand hover:shadow-brand-gold transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-brand-gold" />
                </div>

                {/* Testimony Text */}
                <blockquote className="text-brand-gray mb-6 leading-relaxed italic">
                  "{testimony.testimony}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimony.rating)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 text-brand-gold fill-current" />
                  ))}
                </div>

                {/* Person Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <ImageWithFallback
                      src={testimony.image}
                      alt={testimony.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy group-hover:text-brand-gold transition-colors">
                      {testimony.name}
                    </h4>
                    <p className="text-sm text-brand-gray">{testimony.role}</p>
                    <p className="text-xs text-brand-blue font-medium">{testimony.ministry}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-brand p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-heading text-brand-navy mb-6">
              Your Story Matters Too
            </h3>
            <p className="text-lg text-brand-gray mb-8">
              We'd love to hear how God is working in your life and how our church family 
              has been a blessing to you. Share your testimony to encourage others on their 
              faith journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-semibold px-8 py-3 rounded-md transition-colors">
                Share Your Story
              </button>
              <button className="border border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white font-semibold px-8 py-3 rounded-md transition-colors">
                Visit Us This Sunday
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}