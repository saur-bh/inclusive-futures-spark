import { useState, useEffect } from 'react';
import { PresentationSlide } from '@/components/PresentationSlide';
import { FeatureCard } from '@/components/FeatureCard';
import { SectionTabs } from '@/components/SectionTabs';
import { JourneyTimeline } from '@/components/JourneyTimeline';
import { ImpactStats } from '@/components/ImpactStats';
import { Heart, Users, Brain, Sparkles, BookOpen, TrendingUp, Home, Smile, TreePine, Flag, Award, Monitor } from 'lucide-react';
import aaryavartImage from '@/assets/aaryavart-centre.jpg';
import saryaImage from '@/assets/sarya-app.jpg';
import treePlantationImage from '@/assets/tree-plantation.jpg';
import independenceDayImage from '@/assets/independence-day.jpg';
import cultureEventImage from '@/assets/culture-event.jpg';
import computerEducationImage from '@/assets/computer-education.jpg';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Track current slide based on scroll position to keep tabs in sync
  useEffect(() => {
    const handleScroll = () => {
      const slides = document.querySelectorAll('[data-slide-index]');
      let current = 0;

      slides.forEach((slide, index) => {
        const rect = (slide as HTMLElement).getBoundingClientRect();
        if (rect.top >= -100 && rect.top <= 100) {
          current = index;
        }
      });

      setCurrentSlide(current);
    };

    const scrollContainer = document.querySelector('main');
    scrollContainer?.addEventListener('scroll', handleScroll);

    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const slide = document.querySelector(`[data-slide-index="${index}"]`);
    slide?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SectionTabs 
        sections={[
          { label: 'Aaryavart', index: 0 },
          { label: 'Journey', index: 1 },
          { label: 'Sarya', index: 2 },
          { label: 'Connect', index: 3 },
        ]}
        currentIndex={currentSlide}
        onSelect={scrollToSlide}
      />
      <main className="bg-gradient-soft snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Slide 1 - Aaryavart */}
      <PresentationSlide id="aaryavart" className="bg-gradient-to-br from-primary/5 via-background to-secondary/5" data-slide-index="0">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              🌿 Aaryavart Centre for Autism &<br />Special Needs Foundation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-semibold">
              Creating inclusive spaces where therapy, school, and home come together
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-card border-4 border-primary/10 animate-scale-in">
            <img 
              src={aaryavartImage} 
              alt="Aaryavart Centre - Children engaged in therapy and learning activities"
              className="image-fit-screen"
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Description */}
            <div className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-primary/10 shadow-soft">
              <p className="text-lg text-foreground leading-relaxed">
                Aaryavart is a community-driven initiative transforming the lives of children with autism, ADHD, and special needs across India. We empower children through <span className="font-bold text-primary">early intervention, therapy, education, and inclusion.</span>
              </p>
              
              <div className="pt-4 border-t-2 border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-primary">We Offer:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">🧩 Occupational, Speech, Behavioural, Music & Art Therapy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">🎓 Early Intervention & Inclusive Schooling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">🧘‍♀️ Life Skills, Sensory Regulation & Emotional Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">👩‍👩‍👦 Parent Counseling, Support & Capacity Building</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Impact Cards */}
            <div className="space-y-4">
              <FeatureCard
                icon={<Brain />}
                variant="primary"
                title="Evidence-Based Therapy"
                description="Personalized interventions combining the latest research with compassionate care to support each child's unique journey."
              />
              <FeatureCard
                icon={<Users />}
                variant="secondary"
                title="Family-Centered Approach"
                description="We work closely with families, building confidence and skills that extend from therapy rooms to everyday life."
              />
              <FeatureCard
                icon={<Sparkles />}
                variant="accent"
                title="Celebrating Every Milestone"
                description="Every child deserves dignity, opportunity, and joy. We believe in meaningful progress and confident futures."
              />
            </div>
          </div>

          {/* Impact Statistics */}
          <ImpactStats />

          {/* Core Message */}
          <div className="text-center p-8 bg-gradient-primary rounded-3xl shadow-card">
            <p className="text-2xl md:text-3xl font-bold text-primary-foreground leading-relaxed">
              By connecting therapy with everyday life, Aaryavart helps families build meaningful, confident futures.
            </p>
          </div>
        </div>
      </PresentationSlide>

      {/* Slide 2 - Our Journey */}
      <PresentationSlide id="journey" className="bg-gradient-to-br from-accent/5 via-background to-primary/5" data-slide-index="1">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-block p-3 bg-accent/10 rounded-full mb-4">
              <Award className="w-12 h-12 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              🛤️ Our Journey
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-semibold">
              From a small setup to empowering 1,500+ families
            </p>
          </div>

          {/* Timeline */}
          <JourneyTimeline />

          {/* Community Activities */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-foreground">How We're Making a Difference</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tree Plantation */}
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-3xl border-2 border-primary/10 shadow-soft">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={treePlantationImage} 
                    alt="Children participating in tree plantation activity"
                    className="image-card"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <TreePine className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Environmental Education</h3>
                </div>
                <p className="text-muted-foreground">Teaching children about nature and sustainability through hands-on tree plantation activities, building environmental awareness and responsibility.</p>
              </div>

              {/* Independence Day */}
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-3xl border-2 border-secondary/10 shadow-soft">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={independenceDayImage} 
                    alt="Children celebrating Independence Day with activities"
                    className="image-card"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Flag className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">Cultural Integration</h3>
                </div>
                <p className="text-muted-foreground">Celebrating national festivals and cultural events, helping children develop a sense of identity, belonging, and pride in their heritage.</p>
              </div>

              {/* Culture Event */}
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-3xl border-2 border-accent/10 shadow-soft">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={cultureEventImage} 
                    alt="Children performing at cultural event"
                    className="image-card"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">Performance & Confidence</h3>
                </div>
                <p className="text-muted-foreground">Providing platforms for children to showcase their talents, build confidence, and develop social skills through cultural performances and events.</p>
              </div>

              {/* Computer Education */}
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-3xl border-2 border-primary/10 shadow-soft">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={computerEducationImage} 
                    alt="Children learning computer skills with instructors"
                    className="image-card"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Monitor className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Digital Literacy</h3>
                </div>
                <p className="text-muted-foreground">Empowering children with essential computer skills and technology education, preparing them for a digital future and enhanced independence.</p>
              </div>
            </div>
          </div>
        </div>
      </PresentationSlide>

      {/* Slide 3 - Sarya */}
      <PresentationSlide id="sarya" className="bg-gradient-to-br from-secondary/5 via-background to-accent/5" data-slide-index="2">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-block p-3 bg-secondary/10 rounded-full mb-4">
              <Sparkles className="w-12 h-12 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              ✨ Sarya – The Daily Wonder Book App
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-semibold">
              Visual Learning for Real-Life Growth
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-card border-4 border-secondary/10 animate-scale-in">
            <img 
              src={saryaImage} 
              alt="Sarya App - Child using visual learning app with parent support"
              className="image-fit-screen"
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Description */}
            <div className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-secondary/10 shadow-soft">
              <p className="text-lg text-foreground leading-relaxed">
                Sarya is a <span className="font-bold text-secondary">voice and picture-based learning app</span> designed for Indian families. It helps children learn <span className="font-bold">Activities of Daily Living (ADL)</span> — brushing, dressing, eating, and more — in culturally familiar ways.
              </p>
              
              <div className="pt-4 border-t-2 border-secondary/10">
                <h3 className="text-2xl font-bold mb-4 text-secondary">How We Help Families:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">👕 Build daily routines using real-life Indian visuals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground">💬 Support learning in English, Hindi & regional languages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">🎯 Encourage focus, sequencing & independence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">📊 Track progress and celebrate every small success</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Impact Cards */}
            <div className="space-y-4">
              <FeatureCard
                icon={<BookOpen />}
                variant="secondary"
                title="Culturally Relevant Content"
                description="Real-life visuals and scenarios that Indian children and families recognize and relate to in their daily lives."
              />
              <FeatureCard
                icon={<TrendingUp />}
                variant="accent"
                title="Track & Celebrate Progress"
                description="Parents can monitor their child's journey and celebrate every achievement, building confidence step by step."
              />
              <FeatureCard
                icon={<Home />}
                variant="primary"
                title="Learning at Home"
                description="Transform daily routines into joyful learning moments. From therapy rooms to homes, every day is a celebration."
              />
            </div>
          </div>

          {/* Real Impact Section */}
          <div className="bg-gradient-accent rounded-3xl p-8 shadow-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Smile className="w-16 h-16 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent-foreground">Real Impact</h3>
                <p className="text-lg text-accent-foreground leading-relaxed">
                  Families have shared stories of children who once resisted brushing now doing it joyfully. Parents feel supported, hopeful, and proud — celebrating progress, one step at a time.
                </p>
              </div>
            </div>
          </div>

        </div>
      </PresentationSlide>

      {/* Slide 4 - Contact & Follow */}
      <PresentationSlide id="contact" className="bg-gradient-to-br from-primary/5 via-background to-secondary/5" data-slide-index="3">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              💛 Connect With Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-semibold">
              From therapy rooms to homes, we make learning a daily celebration
            </p>
          </div>

          {/* Instagram Links */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Aaryavart Instagram */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-primary/10 shadow-soft text-center space-y-6">
              <div className="inline-block p-4 bg-primary/10 rounded-full">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Aaryavart Centre</h2>
              <p className="text-muted-foreground">Follow our journey in therapy and inclusive education</p>
              
              <a 
                href="https://www.instagram.com/aaryavartcenterforautism"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform shadow-soft"
              >
                @aaryavartcenterforautism
              </a>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Scan to follow:</p>
                <div className="inline-block p-6 bg-background rounded-2xl border-2 border-primary/20 shadow-soft">
                  <div className="w-40 h-40 bg-muted rounded-xl flex items-center justify-center">
                    <p className="text-xs text-muted-foreground text-center">Aaryavart<br />QR Code</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sarya Instagram */}
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-secondary/10 shadow-soft text-center space-y-6">
              <div className="inline-block p-4 bg-secondary/10 rounded-full">
                <Sparkles className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Sarya App</h2>
              <p className="text-muted-foreground">Discover visual learning tools for daily living skills</p>
              
              <a 
                href="https://www.instagram.com/the_sarya_com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-bold hover:scale-105 transition-transform shadow-soft"
              >
                @the_sarya_com
              </a>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Scan to follow:</p>
                <div className="inline-block p-6 bg-background rounded-2xl border-2 border-secondary/20 shadow-soft">
                  <div className="w-40 h-40 bg-muted rounded-xl flex items-center justify-center">
                    <p className="text-xs text-muted-foreground text-center">Sarya<br />QR Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center p-8 bg-gradient-primary rounded-3xl shadow-card">
            <p className="text-2xl md:text-3xl font-bold text-primary-foreground leading-relaxed">
              Together, we're building a more inclusive world — one child, one family, one community at a time. 🌈
            </p>
          </div>
        </div>
      </PresentationSlide>
    </main>
    </>
  );
};

export default Index;
