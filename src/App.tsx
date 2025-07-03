import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  MessageSquare, 
  Zap, 
  Phone, 
  ArrowRight, 
  Code, 
  Clock, 
  CheckCircle, 
  Mail, 
  Linkedin, 
  Github,
  Menu,
  X,
  Star,
  Users,
  Target,
  Rocket,
  TrendingUp,
  Shield,
  Sparkles,
  Bot,
  Mic,
  Globe,
  PhoneCall,
  UserPlus,
  Calendar,
  Award,
  Timer,
  RefreshCw
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }

      // Scroll animations
      const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
      animateElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 80;
        
        if (isVisible) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "AI-Powered Websites",
      description: "We create high-performance websites tailored to your brand, with clean, scalable code and smart AI enhancements like chatbots and personalization.",
      benefits: [
        "Custom design & development",
        "AI chatbot integration",
        "Responsive & fast loading",
        "SEO optimized structure"
      ],
      highlight: "Featured Service"
    },
    {
      icon: <PhoneCall className="w-10 h-10" />,
      title: "Intelligent Call Automation", 
      description: "Phone flows powered by AI to handle scheduling, follow-ups, and customer support—all designed and managed by a developer, not magic.",
      benefits: [
        "Automated appointment booking",
        "Customer support flows",
        "Follow-up sequences",
        "Integration with your CRM"
      ],
      highlight: "Developer-managed"
    },
    {
      icon: <UserPlus className="w-10 h-10" />,
      title: "AI-Driven Lead Generation",
      description: "Automation pipelines that help you attract, filter, and engage leads, powered by Make.com and smart triggers.",
      benefits: [
        "Make.com automation setup",
        "Lead scoring & filtering",
        "Email sequence automation",
        "CRM integration & tracking"
      ],
      highlight: "Smart automation"
    }
  ];

  const projects = [
    {
      title: "E-commerce Website Enhancement",
      description: "Modern website with AI chatbot integration and automated customer support for a growing online retailer.",
      tech: ["React", "AI Chatbot", "Stripe Integration"],
      results: "Improved customer engagement",
      metric: "24/7 customer support"
    },
    {
      title: "Real Estate Lead System",
      description: "Automated lead capture and qualification system with smart follow-up sequences for property inquiries.",
      tech: ["Make.com", "CRM Integration", "Email Automation"],
      results: "Streamlined lead process",
      metric: "Automated follow-ups"
    },
    {
      title: "Service Business Automation",
      description: "Complete appointment booking and customer management system with AI-powered scheduling assistance.",
      tech: ["Calendar API", "AI Assistant", "SMS Integration"],
      results: "Reduced admin workload",
      metric: "Automated scheduling"
    }
  ];

  const stats = [
    { icon: <Clock className="w-6 h-6" />, number: "48hrs", label: "Average Delivery" },
    { icon: <Shield className="w-6 h-6" />, number: "100%", label: "Satisfaction Guarantee" },
    { icon: <RefreshCw className="w-6 h-6" />, number: "Free", label: "Revisions Included" },
    { icon: <Award className="w-6 h-6" />, number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Refined Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/30 animate-gradient-shift"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-subtle-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-subtle-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-subtle-pulse animation-delay-4000"></div>
        </div>
        {/* Subtle Tech Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="tech-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10h20M10 0v20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)"/>
          </svg>
        </div>
        {/* Gentle Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-blue-400/40 rounded-full animate-float-gentle opacity-60"></div>
          <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-purple-400/40 rounded-full animate-float-gentle animation-delay-2000 opacity-60"></div>
          <div className="absolute bottom-1/3 left-2/5 w-3 h-3 bg-indigo-400/40 rounded-full animate-float-gentle animation-delay-4000 opacity-60"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 scroll-animate-left">
              <div className="relative">
                <Brain className="w-10 h-10 text-blue-400 icon-subtle" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BuiltWithLogic AI
                </span>
                <div className="text-xs text-slate-400">Clean Code. Enhanced by AI.</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 scroll-animate-right">
              {['Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 hover-subtle ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-slate-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-enhanced bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg"
              >
                Book Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors duration-200 hover-subtle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/30 animate-fade-in-up">
            <div className="px-4 py-4 space-y-3">
              {['Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left btn-enhanced bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-2 scroll-animate animation-delay-200">Automate Your Business.</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent scroll-animate animation-delay-400">
                Accelerate Your Growth.
              </span>
            </h1>
            
            {/* Updated Subheading */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed scroll-animate animation-delay-600">
              We build <span className="text-blue-400 font-semibold">fast, scalable websites</span> and 
              <span className="text-purple-400 font-semibold"> automation systems</span>: crafted with 
              <span className="text-blue-400 font-semibold"> clean code</span> and enhanced by AI.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col items-center mb-12 scroll-animate animation-delay-800">
              <button
                onClick={() => scrollToSection('contact')}
                className="group btn-enhanced bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold shadow-2xl animate-soft-glow mb-6"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full hover-glow">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-slate-300">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full hover-glow">
                  <Timer className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300">Consultations available within 24-48h</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center group scroll-animate animation-delay-${(index + 1) * 200}`}>
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300 icon-subtle">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6 scroll-animate hover-glow">
              <Rocket className="w-4 h-4 mr-2 icon-subtle" />
              What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-animate animation-delay-200">
              Solutions That Transform
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your Business
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto scroll-animate animation-delay-400">
              From intelligent websites to automated systems, we deliver practical AI solutions that solve real problems and streamline your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`service-card group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-500 hover:bg-slate-700/30 scroll-animate animation-delay-${(index + 1) * 200} ${index === 0 ? 'ring-2 ring-blue-500/20' : ''}`}>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 border border-blue-500/20 mx-auto mb-4 group-hover:scale-105 icon-subtle">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>
                  <div className={`text-sm font-semibold px-3 py-1 rounded-full border hover-subtle ${
                    index === 0 
                      ? 'text-blue-400 bg-blue-400/10 border-blue-400/20' 
                      : 'text-green-400 bg-green-400/10 border-green-400/20'
                  }`}>
                    {service.highlight}
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed text-center">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3 group/benefit">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 group-hover/benefit:scale-110 transition-transform duration-300" />
                      <span className="text-slate-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-enhanced bg-gradient-to-r from-slate-700 to-slate-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium group-hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Additional Service Benefits */}
          <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center scroll-animate hover-glow">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our Solutions?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3 group">
                <Clock className="w-6 h-6 text-blue-400 icon-subtle" />
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300">48-hour delivery</span>
              </div>
              <div className="flex items-center justify-center space-x-3 group">
                <Shield className="w-6 h-6 text-green-400 icon-subtle" />
                <span className="text-slate-300 group-hover:text-green-400 transition-colors duration-300">100% satisfaction guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-3 group">
                <RefreshCw className="w-6 h-6 text-purple-400 icon-subtle" />
                <span className="text-slate-300 group-hover:text-purple-400 transition-colors duration-300">Free revisions included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6 scroll-animate hover-glow">
              <Target className="w-4 h-4 mr-2 icon-subtle" />
              Recent Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-animate animation-delay-200">
              Solutions We've
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Built & Delivered
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto scroll-animate animation-delay-400">
              See examples of how our automation solutions have helped businesses streamline their operations and improve efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`group bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-500 hover:bg-slate-700/20 hover-lift scroll-animate animation-delay-${(index + 1) * 200}`}>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm hover-subtle">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm font-medium hover-glow">
                    ✓ {project.results}
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold hover-glow">
                    🎯 {project.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6 hover-glow">
                <Brain className="w-4 h-4 mr-2 icon-subtle" />
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Trusted Partner in
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Automation
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We don't just build solutions – we create intelligent systems that understand your business needs and deliver practical results you can measure.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Clock className="w-6 h-6" />, title: "Fast Delivery", desc: "Most projects completed within 48-72 hours" },
                  { icon: <Code className="w-6 h-6" />, title: "Clean, Scalable Code", desc: "Professional solutions built to last and grow" },
                  { icon: <CheckCircle className="w-6 h-6" />, title: "Clear Communication", desc: "Regular updates and transparent progress tracking" },
                  { icon: <Shield className="w-6 h-6" />, title: "Satisfaction Guarantee", desc: "We ensure you're happy with the final result" }
                ].map((item, index) => (
                  <div key={index} className={`flex items-start space-x-4 group scroll-animate animation-delay-${(index + 1) * 200}`}>
                    <div className="text-blue-400 mt-1 group-hover:text-purple-400 transition-colors duration-300 icon-subtle">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 scroll-animate-right hover-lift">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors duration-300">AI Integration</h3>
                    <p className="text-slate-300">Smart automation & AI-powered features</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-green-400 transition-colors duration-300">Automation Expert</h3>
                    <p className="text-slate-300">Make.com, Zapier & custom workflows</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-purple-400 transition-colors duration-300">Full-Stack Developer</h3>
                    <p className="text-slate-300">React, Node.js, Python & modern APIs</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 hover-glow">
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-400" />
                    Money-Back Guarantee
                  </h4>
                  <p className="text-sm text-slate-300">
                    Not satisfied with your solution? We'll refund your money, no questions asked. Your success is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6 scroll-animate hover-glow">
              <Sparkles className="w-4 h-4 mr-2 icon-subtle" />
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-animate animation-delay-200">
              Let's Build Your
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Automated Future
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto scroll-animate animation-delay-400">
              Book a free consultation and discover how automation can streamline your business. No commitment required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 scroll-animate-left hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300 icon-subtle">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">Email</div>
                    <div className="text-slate-300">hello@builtwithlogic.ai</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300 icon-subtle">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">Phone</div>
                    <div className="text-slate-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300 icon-subtle">
                    <Linkedin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">LinkedIn</div>
                    <div className="text-slate-300">linkedin.com/in/builtwithlogic</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl hover-glow">
                <h4 className="font-semibold text-white mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400 icon-subtle" />
                  Satisfaction Guarantee
                </h4>
                <p className="text-sm text-slate-300">
                  Not happy with the result? We'll keep working until you are, or give you a full refund. Your success is our commitment.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 scroll-animate-right hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Start Your Project</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:bg-slate-700/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:bg-slate-700/50"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 hover:bg-slate-700/50">
                    <option>AI-Powered Website</option>
                    <option>Intelligent Call Automation</option>
                    <option>AI-Driven Lead Generation</option>
                    <option>Custom AI Integration</option>
                    <option>Complete Business Automation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tell us about your project</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 hover:bg-slate-700/50"
                    placeholder="Describe your business goals and how automation can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-enhanced bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg"
                >
                  Book Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-indigo-600/80 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-2xl animate-subtle-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl animate-subtle-pulse animation-delay-2000"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main CTA Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight scroll-animate animation-delay-200">
            Ready to Elevate Your Business
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              with AI?
            </span>
          </h2>

          {/* Supporting Line */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed scroll-animate animation-delay-400">
            Let's discuss how our automation solutions can streamline your operations – schedule a free consultation today.
          </p>

          {/* Trust Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 scroll-animate animation-delay-600">
            <div className="flex items-center space-x-3 text-white group">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 icon-subtle">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold group-hover:text-yellow-300 transition-colors duration-300">Free 30-min consultation</div>
                <div className="text-blue-100 text-sm">No commitment required</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white group">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 icon-subtle">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold group-hover:text-yellow-300 transition-colors duration-300">Money-back guarantee</div>
                <div className="text-blue-100 text-sm">100% satisfaction assured</div>
              </div>
            </div>
          </div>

          {/* Large CTA Button */}
          <div className="space-y-6 scroll-animate animation-delay-800">
            <button
              onClick={() => scrollToSection('contact')}
              className="group btn-enhanced bg-white text-blue-600 px-12 py-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-4 text-xl font-bold shadow-2xl mx-auto transform hover:-translate-y-1"
            >
              <Calendar className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
              <span>Schedule a Call</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100 scroll-animate animation-delay-1000">
            <div className="flex items-center space-x-2 group">
              <Shield className="w-5 h-5 group-hover:text-green-300 transition-colors duration-300" />
              <span className="text-sm group-hover:text-white transition-colors duration-300">100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <Clock className="w-5 h-5 group-hover:text-yellow-300 transition-colors duration-300" />
              <span className="text-sm group-hover:text-white transition-colors duration-300">48-Hour Project Delivery</span>
            </div>
            <div className="flex items-center space-x-2 group">
              <RefreshCw className="w-5 h-5 group-hover:text-blue-300 transition-colors duration-300" />
              <span className="text-sm group-hover:text-white transition-colors duration-300">Free Revisions Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0 scroll-animate-left">
              <Brain className="w-10 h-10 text-blue-400 icon-subtle" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  BuiltWithLogic AI
                </span>
                <div className="text-xs text-slate-400">Clean Code. Enhanced by AI.</div>
              </div>
            </div>
            
            <div className="flex space-x-6 scroll-animate-right">
              <button className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover-subtle">
                <Linkedin className="w-6 h-6" />
              </button>
              <button className="text-slate-400 hover:text-purple-400 transition-colors duration-300 hover-subtle">
                <Github className="w-6 h-6" />
              </button>
              <button className="text-slate-400 hover:text-green-400 transition-colors duration-300 hover-subtle">
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-700/30 text-center text-slate-400 scroll-animate">
            <p>&copy; 2024 BuiltWithLogic AI. All rights reserved. Transforming businesses with intelligent automation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;