"use client";

import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Star } from 'lucide-react';
import ClickSpark from './clickspark';
import ScrollFloat from './ScrollFloats';
import ShinyText from './ShinyText';
import MagicBento from './MagicBento';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "ABIT Poster Presentation",
      organization: "ABIT",
      year: "2024",
      description: "Recognized for exceptional contribution to product development and team leadership.",
      icon: Trophy,
      category: "Competition"
    },
    {
      title: "ASBM Hackathon",
      organization: "Asian School Of Business Management",
      year: "2024",
      description: "Awarded for developing an innovative solution for Disaster Management.",
      icon: Award,
      category: "Innovation"
    },
    {
      title: "Trident Hackathon",
      organization: "Trident",
      year: "2023",
      description: "Acknowledged for Green Technology & environmental sustainability initiatives.",
      icon: Medal,
      category: "Innovation"
    },
    {
      title: "IIT WORKSHOP",
      organization: "IIT Bhubaneswar",
      year: "2024",
      description: "Participated in a workshop on advanced machine learning techniques.",
      icon: Star,
      category: "Competition"
    }
  ];

  return (
    <ClickSpark as="section" id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <ScrollFloat containerClassName="text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Achievement
          </ScrollFloat>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto">
            <ShinyText text='recognition and awards that highlight my professional journey and contributions.'/>
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <MagicBento
                    key={index}
                    enableStars={true}
                    enableSpotlight={false}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    glowColor="255, 255, 255"
                    particleCount={3}
                  >
                    <div className="p-6 h-full flex flex-col items-center text-center bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {achievement.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">
                        {achievement.organization}
                      </p>
                      <p className="text-muted-foreground text-sm flex-1">
                        {achievement.description}
                      </p>
                    </div>
                  </MagicBento>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ClickSpark>
  );
};

export default AchievementsSection;
