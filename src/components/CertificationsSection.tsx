"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Calendar, BookOpen, CheckCircle, Eye, ChevronLeft, ChevronRight, ZoomIn, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import MagicBento from './MagicBento';
import ScrollFloat from './ScrollFloats';
import ShinyText from './ShinyText';
import ClickSpark from './clickspark';

const CertificationsSection = () => {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Certificate images from public folder
  const certificateImages = [
    {
      src: '/Ayush Routray  552750_page-0001.jpg',
      title: 'ML Internship Certificate',
      description: 'Certificate for successful completion of ML Internship.',
    },
    {
      src: '/Ayush Routray_page-0001.jpg',
      title: 'Ayush Routray Certificate',
      description: 'Certificate awarded to Ayush Routray.',
    },
    {
      src: '/Ayush-Routray_page-0001.jpg',
      title: 'Ayush Routray Certificate - Page 1',
      description: 'First page of Ayush Routray\'s certificate.',
    },
    {
      src: '/Ayush-Routray_page-0002.jpg',
      title: 'Ayush Routray Certificate - Page 2',
      description: 'Second page of Ayush Routray\'s certificate.',
    },
    {
      src: '/Default Folder_20250820_page-0001.jpg',
      title: 'Certificate - August 2025 - Page 1',
      description: 'First page of certificate issued in August 2025.',
    },
    {
      src: '/Default Folder_20250820_page-0002.jpg',
      title: 'Certificate - August 2025 - Page 2',
      description: 'Second page of certificate issued in August 2025.',
    },
    {
      src: '/Default Folder_20250820_page-0003.jpg',
      title: 'Certificate - August 2025 - Page 3',
      description: 'Third page of certificate issued in August 2025.',
    },
    {
      src: '/ML Internship - Ayush Routray (2)_page-0001.jpg',
      title: 'ML Internship Certificate',
      description: 'Another ML Internship certificate for Ayush Routray.',
    }
  ];

  const handleImageClick = (image, index) => {
    setZoomedImage(image);
    setCurrentImageIndex(index);
    setShowZoomModal(true);
  };

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev === 0 ? certificateImages.length - 1 : prev - 1);
      setZoomedImage(certificateImages[currentImageIndex === 0 ? certificateImages.length - 1 : currentImageIndex - 1]);
    } else {
      setCurrentImageIndex(prev => prev === certificateImages.length - 1 ? 0 : prev + 1);
      setZoomedImage(certificateImages[currentImageIndex === certificateImages.length - 1 ? 0 : currentImageIndex + 1]);
    }
  };

  // --- DATA FOR CERTIFICATIONS ---
  const mainCertifications = [
    {
      title: "  IIT BBSR DATA SCIENCE/GENAI",
      issuer: "Edu Fabrica",
      issueDate: "March 2024",
      status: "Active",
      credentialId: "EDU-BBSR-87327151",
      description: "Validates expertise in data science and generative AI.",
      skills: ["Data Science", "Generative AI", "Agentic AI"],
    },
    {
      title: "Lets Upgrade",
      issuer: "Lets Upgrade",
      issueDate: "12 February 2024",
      credentialId: "LUEJAIGFEB124120",
      status: "Active",
      description: "Demonstrates proficiency in  Building AI bot in 2 Days.",
      skills: ["Gemini", "Python", "Streamlit", "Microservices"],
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      issueDate: "November 2024",
      credentialId: "AZ-900-345678",
      status: "Active",
      description: "Foundational knowledge of cloud concepts and Azure services.",
      skills: ["Azure Services", "Cloud Concepts", "Security", "Compliance"],
      verificationUrl: "#"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      issueDate: "September 2023",
      expiryDate: "September 2025",
      credentialId: "META-REACT-901234",
      status: "Active", 
      description: "Advanced proficiency in React development and best practices.",
      skills: ["React", "JavaScript", "State Management", "Component Design"],
      verificationUrl: "#"
    }
  ];

  return (
    // FIX: Removed background color to blend with the rest of the page
    <ClickSpark as="section" id="certifications" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          {/* FIX: Replaced gradient-text with a visible, themed color */}
          <ScrollFloat containerClassName="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Certification
          </ScrollFloat>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto">
   <ShinyText  text = ' Professional certifications that validate my technical expertise and commitment to continuous learning.' />
          </p>
        </div>

        {/* --- Main Certifications with MagicBento Effect --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {mainCertifications.map((cert, index) => (
            <MagicBento
              key={index}
              enableStars={true}
              enableSpotlight={false}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              glowColor="255, 255, 255"
              particleCount={4}
            >
              <div className="h-full flex flex-col bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 relative overflow-hidden hover:border-border transition-all duration-300">
                {/* Header with Active badge and external link */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <Badge variant="default" className="text-xs px-3 py-1">
                      <CheckCircle className="w-3 h-3 mr-1.5" />
                      {cert.status}
                    </Badge>
                    <Button asChild variant="ghost" size="icon" className="shrink-0">
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" title="Verify Certificate">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Title and issuer */}
                <div className="mb-4 relative z-10">
                  <h3 className="text-xl font-semibold text-foreground mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed relative z-10">
                  {cert.description}
                </p>

                {/* Issue and expiry dates */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expiryDate && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Expires: {cert.expiryDate}</span>
                    </div>
                  )}
                </div>

                {/* Key Skills section */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-foreground" />
                    <h4 className="text-foreground font-medium text-sm">Key Skills</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </MagicBento>
          ))}
        </div>

        {/* --- "View All" Button --- */}
        <div className="flex justify-center mt-16 mb-16">
          <Button 
            onClick={() => setShowAllCertificates(!showAllCertificates)}
            variant="outline"
            className="group relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
          >
            <Eye className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
            {showAllCertificates ? 'Hide Additional Certificates' : 'View All Certificates'}
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${showAllCertificates ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {/* --- Certificate Images Carousel --- */}
        {showAllCertificates && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Additional Certifications</h3>
            
            {/* Image Carousel */}
            <div className="relative w-full max-w-6xl mx-auto">
              <div className="overflow-hidden rounded-lg">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                  {certificateImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                      <div className="mx-4 overflow-hidden group cursor-pointer" onClick={() => handleImageClick(image, index)}>
                        <div className="achievement-card">
                          <div className="relative aspect-[4/3] bg-gray-900">
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                                console.error(`Failed to load image: ${image.src}`);
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Zoom overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-black/70 backdrop-blur-sm rounded-full p-3">
                                <ZoomIn className="w-8 h-8 text-white" />
                              </div>
                            </div>
                            
                            {/* Image info overlay */}
                            <div className="absolute bottom-4 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pb-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 min-h-[80px]">
                              <h4 className="text-white font-semibold text-base leading-tight">{image.title}</h4>
                              <p className="text-white/80 text-sm leading-relaxed mt-1">{image.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation arrows */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-200 z-10"
                disabled={certificateImages.length <= 1}
                title="Previous certificate"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-200 z-10"
                disabled={certificateImages.length <= 1}
                title="Next certificate"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {certificateImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-gray-600'
                    }`}
                    title={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Zoom Modal */}
            {showZoomModal && zoomedImage && (
              <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setShowZoomModal(false)}>
                <div className="relative max-w-7xl max-h-screen p-4">
                  <img
                    src={zoomedImage.src}
                    alt={zoomedImage.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />
                  
                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setShowZoomModal(false)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                    title="Close modal"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  {/* Navigation in modal */}
                  <button
                    onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
                    title="Previous certificate"
                  >
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </button>
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
                    title="Next certificate"
                  >
                    <ChevronRight className="w-8 h-8 text-white" />
                  </button>
                  
                  {/* Image title in modal */}
                  <div className="absolute bottom-500 left-6 right-6 text-center bg-black/60 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-white text-xl font-semibold leading-tight">{zoomedImage.title}</h3>
                    <p className="text-white/80 text-sm mt-2 leading-relaxed">{zoomedImage.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </ClickSpark>
  );
};

export default CertificationsSection;
