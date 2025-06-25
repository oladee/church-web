import { Button } from "./ui/button";
import { Menu, X, Phone, MapPin, Clock, ChevronDown, ChevronUp, Sparkles, Crown, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import churchLogo from "figma:asset/20c3d1783fcf424e26a56c9bef434de8dc87f58c.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMinistriesOpen, setIsMinistriesOpen] = useState(false);
  const [isDesktopMinistriesOpen, setIsDesktopMinistriesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isScrolling, setIsScrolling] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Determine scroll direction
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      setIsScrolling(true);

      // Always show navbar at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide navbar immediately when scrolling down
      if (direction === 'down' && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
        setIsMinistriesOpen(false);
        setIsDesktopMinistriesOpen(false);
      }

      // For upward scrolling, hide navbar while actively scrolling
      if (direction === 'up') {
        setIsVisible(false);
      }

      // Set timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        
        // Only show navbar if scrolling stopped and last direction was upward
        if (direction === 'up' && currentScrollY > 100) {
          setIsVisible(true);
        }
      }, 150); // 150ms delay after scrolling stops

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  // Calculate dropdown position when it opens
  useEffect(() => {
    if (isDesktopMinistriesOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: buttonRect.bottom + window.scrollY + 8,
        left: buttonRect.left + window.scrollX
      });
    }
  }, [isDesktopMinistriesOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsDesktopMinistriesOpen(false);
      }
    };

    if (isDesktopMinistriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDesktopMinistriesOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsMinistriesOpen(false);
        setIsDesktopMinistriesOpen(false);
      }
    };

    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
        setIsMinistriesOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsMinistriesOpen(false);
    }
  }, [isMenuOpen]);

  const handleMinistriesToggle = () => {
    setIsMinistriesOpen(!isMinistriesOpen);
  };

  const handleDesktopMinistriesToggle = () => {
    setIsDesktopMinistriesOpen(!isDesktopMinistriesOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setIsMinistriesOpen(false);
    setIsDesktopMinistriesOpen(false);
  };

  const handleSectionScroll = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    handleMenuItemClick();
  };

  return (
    <>
      {/* Top Info Bar - Pure Black Background */}
      <div className={`bg-black text-white py-3 hidden md:block transition-transform duration-300 relative overflow-hidden border-b border-white/10 ${
        isVisible ? 'navbar-visible' : 'navbar-hidden'
      }`} style={{ zIndex: 999 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 group">
                <div className="p-1.5 bg-brand-purple/20 border border-brand-purple/30 rounded-lg group-hover:bg-brand-purple/30 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-purple-light" />
                </div>
                <span className="text-gray-200">(555) 123-WORD</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="p-1.5 bg-brand-gold/20 border border-brand-gold/30 rounded-lg group-hover:bg-brand-gold/30 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold-light" />
                </div>
                <span className="text-gray-200">Toronto, Ontario, Canada</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="p-1.5 bg-brand-purple/20 border border-brand-purple/30 rounded-lg group-hover:bg-brand-purple/30 transition-colors">
                  <Clock className="w-3.5 h-3.5 text-brand-purple-light" />
                </div>
                <span className="text-gray-200">Sunday Service: 10:00 AM & 6:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleSectionScroll('give')} 
                className="hover:text-brand-gold-light transition-colors font-medium group flex items-center space-x-2"
              >
                <Star className="w-3.5 h-3.5 group-hover:text-brand-gold-light transition-colors" />
                <span>Online Giving</span>
              </button>
              <button 
                onClick={() => handleSectionScroll('contact')} 
                className="hover:text-brand-purple-light transition-colors font-medium group flex items-center space-x-2"
              >
                <Sparkles className="w-3.5 h-3.5 group-hover:text-brand-purple-light transition-colors" />
                <span>Prayer Requests</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Pure Black Background with Enhanced Scroll Behavior */}
      <header className={`bg-black shadow-2xl border-b border-white/10 sticky top-0 transition-transform duration-300 relative overflow-hidden ${
        isVisible ? 'navbar-visible' : 'navbar-hidden'
      }`} style={{ zIndex: 1000 }}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center h-22">
            {/* Desktop Logo */}
            <div className="flex items-center cursor-pointer group" onClick={() => navigate('/')}>
              <div className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <img 
                  src={churchLogo} 
                  alt="Prophet Nana Akwasis Sarfo Ministry" 
                  className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <button onClick={() => navigate('/')} className="text-white/90 hover:text-white transition-all duration-300 font-medium group relative">
                <span className="relative z-10">Home</span>
                <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-purple-light to-brand-gold transition-all duration-300"></div>
              </button>
              <button onClick={() => handleSectionScroll('about')} className="text-white/90 hover:text-white transition-all duration-300 font-medium group relative">
                <span className="relative z-10">About Prophet</span>
                <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-purple-light to-brand-gold transition-all duration-300"></div>
              </button>
              
              {/* Ministries Dropdown */}
              <div className="relative">
                <button 
                  ref={buttonRef}
                  onClick={handleDesktopMinistriesToggle}
                  className="text-white/90 hover:text-white transition-all duration-300 font-medium flex items-center group relative"
                >
                  <span className="relative z-10">
                    Ministries
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-purple-light to-brand-gold transition-all duration-300"></div>
                  </span>
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${isDesktopMinistriesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <button onClick={() => handleSectionScroll('events')} className="text-white/90 hover:text-white transition-all duration-300 font-medium group relative">
                <span className="relative z-10">Events</span>
                <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-purple-light to-brand-gold transition-all duration-300"></div>
              </button>
              <button onClick={() => { navigate('/messages'); handleMenuItemClick(); }} className="text-white/90 hover:text-white transition-all duration-300 font-medium group relative">
                <span className="relative z-10">Messages</span>
                <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-purple-light to-brand-gold transition-all duration-300"></div>
              </button>
              <button onClick={() => handleSectionScroll('give')} className="text-white/90 hover:text-white transition-all duration-300 font-medium group relative">
                <span className="relative z-10">Give</span>
                <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-purple-light to-brand-gold transition-all duration-300"></div>
              </button>
              <button onClick={() => handleSectionScroll('contact')} className="text-white/90 hover:text-white transition-all duration-300 font-medium group relative">
                <span className="relative z-10">Contact</span>
                <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-brand-purple-light to-brand-gold transition-all duration-300"></div>
              </button>
              
              <Button className="group relative bg-gradient-to-r from-brand-purple to-brand-purple-light hover:from-brand-purple-dark hover:to-brand-purple text-white font-medium px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-purple/20">
                <span className="relative z-10 flex items-center">
                  <Crown className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Join Us
                </span>
              </Button>
            </nav>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Logo - Larger Size */}
            <div className="flex justify-center py-8">
              <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 group">
                <img 
                  src={churchLogo} 
                  alt="Prophet Nana Akwasis Sarfo Ministry" 
                  className="h-28 w-auto cursor-pointer group-hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate('/')}
                />
              </div>
            </div>

            <div className="flex justify-center pb-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group relative flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-white/10 shadow-lg border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X size={22} className="text-white group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={22} className="text-white group-hover:scale-110 transition-transform duration-300" />
                )}
              </button>
            </div>

            {isMenuOpen && (
              <div className="border-t border-white/10 bg-black relative overflow-hidden">
                <nav className="px-4 py-6 space-y-3 relative z-10">
                  <button 
                    onClick={() => { navigate('/'); handleMenuItemClick(); }}
                    className="group block w-full text-center py-3.5 px-5 bg-white/5 text-white hover:text-brand-purple-light hover:bg-white/10 rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-white/20"
                  >
                    <span className="flex items-center justify-center">
                      <Crown className="w-5 h-5 mr-2 group-hover:text-brand-gold-light transition-colors" />
                      Home
                    </span>
                  </button>
                  <button 
                    onClick={() => handleSectionScroll('about')}
                    className="group block w-full text-center py-3.5 px-5 bg-white/5 text-white hover:text-brand-purple-light hover:bg-white/10 rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-white/20"
                  >
                    <span className="flex items-center justify-center">
                      <Sparkles className="w-5 h-5 mr-2 group-hover:text-brand-gold-light transition-colors" />
                      About Prophet
                    </span>
                  </button>
                  
                  <div className="space-y-2">
                    <button
                      onClick={handleMinistriesToggle}
                      className="group w-full flex items-center justify-center py-3.5 px-5 bg-white/5 text-white hover:text-brand-purple-light hover:bg-white/10 rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-white/20"
                      aria-expanded={isMinistriesOpen}
                    >
                      <Star className="w-5 h-5 mr-2 group-hover:text-brand-gold-light transition-colors" />
                      <span>Ministries</span>
                      {isMinistriesOpen ? (
                        <ChevronUp className="w-4 h-4 ml-2 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-300" />
                      )}
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isMinistriesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="bg-white/5 rounded-xl p-3 space-y-2 border border-white/10 shadow-lg">
                        <button 
                          onClick={() => handleSectionScroll('groups')}
                          className="flex items-center w-full text-left py-2.5 px-3 text-gray-200 hover:text-brand-purple-light hover:bg-white/10 rounded-lg transition-all duration-200"
                        >
                          <Crown className="w-4 h-4 mr-2" />
                          <span>Prayer Team</span>
                        </button>
                        <button 
                          onClick={() => handleSectionScroll('groups')}
                          className="flex items-center w-full text-left py-2.5 px-3 text-gray-200 hover:text-brand-purple-light hover:bg-white/10 rounded-lg transition-all duration-200"
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          <span>Leaders Ministry</span>
                        </button>
                        <button 
                          onClick={() => handleSectionScroll('groups')}
                          className="flex items-center w-full text-left py-2.5 px-3 text-gray-200 hover:text-brand-purple-light hover:bg-white/10 rounded-lg transition-all duration-200"
                        >
                          <Star className="w-4 h-4 mr-2" />
                          <span>School of Ministry</span>
                        </button>
                        <button 
                          onClick={() => handleSectionScroll('groups')}
                          className="flex items-center w-full text-left py-2.5 px-3 text-gray-200 hover:text-brand-purple-light hover:bg-white/10 rounded-lg transition-all duration-200"
                        >
                          <Crown className="w-4 h-4 mr-2" />
                          <span>Men of Valor</span>
                        </button>
                        <button 
                          onClick={() => handleSectionScroll('groups')}
                          className="flex items-center w-full text-left py-2.5 px-3 text-gray-200 hover:text-brand-purple-light hover:bg-white/10 rounded-lg transition-all duration-200"
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          <span>Woman Within</span>
                        </button>
                        <div className="border-t border-white/20 my-2"></div>
                        <button 
                          onClick={() => { navigate('/ministry-partnership'); handleMenuItemClick(); }}
                          className="flex items-center w-full text-left py-2.5 px-3 text-gray-200 hover:text-brand-gold-light hover:bg-white/10 rounded-lg transition-all duration-200"
                        >
                          <Star className="w-4 h-4 mr-2" />
                          <span>Ministry Partnership</span>
                        </button>
                        <button 
                          onClick={() => { navigate('/community-service'); handleMenuItemClick(); }}
                          className="flex items-center w-full text-left py-2.5 px-3 text-gray-200 hover:text-brand-gold-light hover:bg-white/10 rounded-lg transition-all duration-200"
                        >
                          <Crown className="w-4 h-4 mr-2" />
                          <span>Community Service</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleSectionScroll('events')}
                    className="group block w-full text-center py-3.5 px-5 bg-white/5 text-white hover:text-brand-purple-light hover:bg-white/10 rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-white/20"
                  >
                    <span className="flex items-center justify-center">
                      <Star className="w-5 h-5 mr-2 group-hover:text-brand-gold-light transition-colors" />
                      Events
                    </span>
                  </button>
                  <button 
                    onClick={() => { navigate('/messages'); handleMenuItemClick(); }}
                    className="group block w-full text-center py-3.5 px-5 bg-white/5 text-white hover:text-brand-purple-light hover:bg-white/10 rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-white/20"
                  >
                    <span className="flex items-center justify-center">
                      <Sparkles className="w-5 h-5 mr-2 group-hover:text-brand-gold-light transition-colors" />
                      Messages
                    </span>
                  </button>
                  <button 
                    onClick={() => handleSectionScroll('give')}
                    className="group block w-full text-center py-3.5 px-5 bg-white/5 text-white hover:text-brand-purple-light hover:bg-white/10 rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-white/20"
                  >
                    <span className="flex items-center justify-center">
                      <Crown className="w-5 h-5 mr-2 group-hover:text-brand-gold-light transition-colors" />
                      Give
                    </span>
                  </button>
                  <button 
                    onClick={() => handleSectionScroll('contact')}
                    className="group block w-full text-center py-3.5 px-5 bg-white/5 text-white hover:text-brand-purple-light hover:bg-white/10 rounded-xl transition-all duration-300 font-medium border border-white/10 hover:border-white/20"
                  >
                    <span className="flex items-center justify-center">
                      <Star className="w-5 h-5 mr-2 group-hover:text-brand-gold-light transition-colors" />
                      Contact
                    </span>
                  </button>
                  
                  <div className="pt-4">
                    <Button 
                      className="group relative w-full bg-gradient-to-r from-brand-purple to-brand-purple-light hover:from-brand-purple-dark hover:to-brand-purple text-white font-medium py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-purple/20"
                      onClick={handleMenuItemClick}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Crown className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Join Our Family
                      </span>
                    </Button>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Fixed Position Dropdown - Pure Black Background */}
      {isDesktopMinistriesOpen && (
        <div 
          ref={dropdownRef}
          className="fixed w-60 bg-black shadow-2xl rounded-xl border border-white/20 overflow-hidden transition-all duration-300"
          style={{ 
            top: dropdownPosition.top, 
            left: dropdownPosition.left,
            zIndex: 999999
          }}
        >
          <div className="relative z-10 py-3">
            <button onClick={() => handleSectionScroll('groups')} className="flex items-center w-full text-left px-4 py-2.5 text-white/90 hover:bg-white/10 hover:text-brand-purple-light transition-all duration-200 group/item">
              <div className="w-8 h-8 bg-brand-purple/20 border border-brand-purple/30 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-brand-purple/30 transition-colors">
                <Crown className="w-4 h-4 text-brand-purple-light" />
              </div>
              <span className="font-medium">Prayer Team</span>
            </button>
            <button onClick={() => handleSectionScroll('groups')} className="flex items-center w-full text-left px-4 py-2.5 text-white/90 hover:bg-white/10 hover:text-brand-purple-light transition-all duration-200 group/item">
              <div className="w-8 h-8 bg-brand-purple/20 border border-brand-purple/30 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-brand-purple/30 transition-colors">
                <Sparkles className="w-4 h-4 text-brand-purple-light" />
              </div>
              <span className="font-medium">Leaders Ministry</span>
            </button>
            <button onClick={() => handleSectionScroll('groups')} className="flex items-center w-full text-left px-4 py-2.5 text-white/90 hover:bg-white/10 hover:text-brand-purple-light transition-all duration-200 group/item">
              <div className="w-8 h-8 bg-brand-purple/20 border border-brand-purple/30 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-brand-purple/30 transition-colors">
                <Star className="w-4 h-4 text-brand-purple-light" />
              </div>
              <span className="font-medium">School of Ministry</span>
            </button>
            <button onClick={() => handleSectionScroll('groups')} className="flex items-center w-full text-left px-4 py-2.5 text-white/90 hover:bg-white/10 hover:text-brand-purple-light transition-all duration-200 group/item">
              <div className="w-8 h-8 bg-brand-purple/20 border border-brand-purple/30 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-brand-purple/30 transition-colors">
                <Crown className="w-4 h-4 text-brand-purple-light" />
              </div>
              <span className="font-medium">Men of Valor</span>
            </button>
            <button onClick={() => handleSectionScroll('groups')} className="flex items-center w-full text-left px-4 py-2.5 text-white/90 hover:bg-white/10 hover:text-brand-purple-light transition-all duration-200 group/item">
              <div className="w-8 h-8 bg-brand-purple/20 border border-brand-purple/30 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-brand-purple/30 transition-colors">
                <Sparkles className="w-4 h-4 text-brand-purple-light" />
              </div>
              <span className="font-medium">Woman Within</span>
            </button>
            <div className="border-t border-white/20 my-2 mx-4"></div>
            <button onClick={() => { navigate('/ministry-partnership'); handleMenuItemClick(); }} className="flex items-center w-full text-left px-4 py-2.5 text-white/90 hover:bg-white/10 hover:text-brand-gold-light transition-all duration-200 group/item">
              <div className="w-8 h-8 bg-brand-gold/20 border border-brand-gold/30 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-brand-gold/30 transition-colors">
                <Star className="w-4 h-4 text-brand-gold-light" />
              </div>
              <span className="font-medium">Ministry Partnership</span>
            </button>
            <button onClick={() => { navigate('/community-service'); handleMenuItemClick(); }} className="flex items-center w-full text-left px-4 py-2.5 text-white/90 hover:bg-white/10 hover:text-brand-gold-light transition-all duration-200 group/item">
              <div className="w-8 h-8 bg-brand-gold/20 border border-brand-gold/30 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-brand-gold/30 transition-colors">
                <Crown className="w-4 h-4 text-brand-gold-light" />
              </div>
              <span className="font-medium">Community Service</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}