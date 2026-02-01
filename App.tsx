import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Swiper from 'swiper/bundle';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- Sub-components for structure ---

const Navigation = () => (
  <nav className="fixed top-0 right-0 z-50 p-8 hidden md:flex items-center gap-8 mix-blend-difference">
    <a href="#hero" className="text-white font-sans font-medium hover:text-accent transition-colors">Home</a>
    <a href="#services" className="text-white font-sans font-medium hover:text-accent transition-colors">Services</a>
    <a href="#process" className="text-white font-sans font-medium hover:text-accent transition-colors">Process</a>
    <a href="#cases" className="text-white font-sans font-medium hover:text-accent transition-colors">Cases</a>
    <a href="#contact" className="text-white font-sans font-medium hover:text-accent transition-colors">Contact</a>
  </nav>
);

const Hero = () => {
  useEffect(() => {
    const chars = document.querySelectorAll('.hero-char');
    gsap.from(chars, {
      yPercent: 120,
      opacity: 0,
      duration: 1.2,
      stagger: 0.04,
      ease: "power4.out",
      delay: 0.2
    });
  }, []);

  return (
    <section id="hero" className="h-screen w-full sticky top-0 z-0 flex flex-col justify-between overflow-hidden bg-dark">
      <div className="absolute inset-0 z-0 opacity-50">
        <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background Texture" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark"></div>
      </div>
      <div className="relative z-20 p-8 border-b border-r border-grid w-fit backdrop-blur-md">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-accent tracking-[0.2em]">AGENCY_V2.0</span>
          <span className="font-mono text-[10px] text-white/50 tracking-[0.2em]">EST. 2026</span>
        </div>
      </div>
      <div className="relative z-10 flex-1 flex items-center justify-center mix-blend-overlay px-4">
        <h1 className="text-[clamp(4rem,18vw,24rem)] font-sans font-bold leading-none tracking-tighter text-white text-center select-none">
          <span className="hero-char inline-block">A</span><span className="hero-char inline-block">U</span><span className="hero-char inline-block">M</span><span className="hero-char inline-block">E</span><span className="hero-char inline-block hidden md:inline-block">-</span><span className="hero-char inline-block">V</span><span className="hero-char inline-block">E</span><span className="hero-char inline-block">R</span><span className="hero-char inline-block">S</span><span className="hero-char inline-block">E</span>
        </h1>
      </div>
      <div className="absolute bottom-0 right-0 p-8 border-t border-l border-grid bg-dark/30 backdrop-blur-sm z-20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <span className="font-mono text-[10px] text-white uppercase tracking-widest">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

const Reveal = () => {
  useEffect(() => {
    gsap.to(".reveal-text", {
      y: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".reveal-trigger",
        start: "top 80%",
      }
    });

    gsap.to(".reveal-fade", {
      opacity: 1,
      duration: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".reveal-trigger",
        start: "top 80%",
      }
    });
  }, []);

  return (
    <section className="relative z-10 w-full min-h-screen bg-dark border-t border-grid flex flex-col pt-32 overflow-hidden">
      {/* Top Text Content */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center z-10 bg-dark/95 text-center mb-16">
        <div className="reveal-trigger space-y-4 max-w-5xl">
          <div className="overflow-hidden">
            <h2 className="reveal-text text-5xl lg:text-8xl font-sans font-bold tracking-tighter text-white leading-[1.1] translate-y-full">
              Forging Brands.<br/>
              <span className="text-accent">Engineering Intelligence.</span>
            </h2>
          </div>
        </div>
        
        <p className="mt-8 text-lg lg:text-xl text-gray-400 max-w-2xl reveal-fade opacity-0 leading-relaxed font-light">
          The convergence of World-Class Aesthetics and Autonomous Intelligence.
        </p>
        
        <div className="mt-16 reveal-fade opacity-0 w-full flex justify-center">
          <div className="inline-flex items-center gap-3 font-mono text-xs text-accent uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md">
             <div className="w-2 h-2 bg-red-500 rounded-full animate-[pulse_1s_ease-in-out_infinite] shadow-[0_0_10px_#ef4444]"></div>
             <span>&#123; Ai generated visuals &#125;</span>
          </div>
        </div>
      </div>
      
      {/* Full Width Cinematic Showreel */}
      <div className="w-full relative aspect-[2.35/1] overflow-hidden group cursor-pointer border-y border-grid">
         {/* Parallax Image/Video Placeholder */}
          <div className="absolute inset-0 bg-black">
             <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[2s] ease-out" 
                alt="Showreel Preview" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-dark/50 mix-blend-overlay"></div>
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
               <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                  <i className="ph-fill ph-play text-3xl text-white ml-1"></i>
               </div>
          </div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="relative z-10 w-full bg-dark py-24 lg:py-32 border-t border-grid overflow-hidden">
    <div className="container mx-auto px-6 flex flex-col items-center text-center">
      
      <div className="max-w-4xl">
        <h2 className="text-5xl lg:text-7xl font-sans font-bold text-accent tracking-tighter mb-12">How it Works.</h2>
        
        <div className="space-y-10 font-sans text-xl lg:text-3xl leading-snug text-white">
          <p>
            Brief <span className="text-accent mx-2">→</span> Explore (AI) <span className="text-accent mx-2">→</span> Curate (human) <span className="text-accent mx-2">→</span> Prototype <span className="text-accent mx-2">→</span> Test <span className="text-accent mx-2">→</span> <span className="text-accent font-bold">Ship.</span>
          </p>
          
          <p className="font-bold text-2xl lg:text-4xl text-white pt-4">Each loop has a KPI and deadline.</p>
          
          <p className="text-base lg:text-lg text-gray-400 font-mono leading-relaxed pt-4 max-w-lg mx-auto">
            Rapid ideation, variants, outlines, asset cleanup, data grouping. Humans finalize layout, copy and motion.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const cards = containerRef.current.getElementsByClassName('spotlight-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section id="services" className="relative z-10 w-full bg-[#0a0a0a] py-32 border-t border-grid" onMouseMove={handleMouseMove} ref={containerRef}>
      <style>{`
        /* Spotlight Effect CSS */
        .spotlight-card {
          position: relative;
          background-color: #171717; /* neutral-900 equivalent */
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          transition: background-color 0.3s;
        }

        .spotlight-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%);
          z-index: 1;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.5s;
        }
        
        /* Inner border glow */
        .spotlight-card::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 59, 48, 0.15), transparent 40%);
          z-index: 1;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .spotlight-card:hover::after {
            opacity: 1;
        }

        /* Card Content Layer */
        .spotlight-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* 1. Graphic & Logo Design Animation (Morph) */
        .anim-morph {
          width: 60px;
          height: 60px;
          border: 2px solid #FF3B30;
          animation: morph 4s ease-in-out infinite;
        }
        @keyframes morph {
          0%, 100% { border-radius: 0%; transform: rotate(0deg); }
          50% { border-radius: 50%; transform: rotate(180deg); background-color: rgba(255,59,48, 0.1); }
        }

        /* 2. AI Automation Animation (Network) */
        .anim-network {
          width: 80px;
          height: 60px;
          position: relative;
        }
        .net-dot {
            width: 8px; height: 8px; background: #FF3B30; border-radius: 50%; position: absolute;
            animation: pulse-dot 2s infinite ease-in-out alternate;
        }
        .net-line {
            position: absolute; height: 1px; background: rgba(255,59,48,0.5); transform-origin: left center;
        }
        @keyframes pulse-dot { from { box-shadow: 0 0 0 0 rgba(255,59,48,0.4); } to { box-shadow: 0 0 0 6px rgba(255,59,48,0); } }

        /* 3. Web Dev Animation (Typing) */
        .anim-type {
            font-family: 'Space Mono', monospace;
            font-size: 14px;
            color: #FF3B30;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid #FF3B30;
            width: 0;
            animation: typing 3s steps(15, end) infinite alternate;
        }
        @keyframes typing { 
            0% { width: 0; }
            40%, 100% { width: 100%; } 
        }
      `}</style>
      
      <div className="container mx-auto px-6">
        <h2 className="text-6xl md:text-8xl font-sans font-bold text-white tracking-tighter mb-24">Services.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Graphic & Logo Design */}
            <div className="spotlight-card rounded-2xl p-8 min-h-[320px]">
                <div className="spotlight-content">
                    <div className="mb-8 p-4 bg-white/5 w-fit rounded-lg">
                        <div className="anim-morph"></div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-sans">Graphic & Logo Design</h3>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed">
                            Adaptive visual systems that morph to fit any medium. From static marks to living, breathing brand identities.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 2: AI Automation */}
            <div className="spotlight-card rounded-2xl p-8 min-h-[320px]">
                 <div className="spotlight-content">
                    <div className="mb-8 p-4 bg-white/5 w-fit rounded-lg h-[92px] w-[112px] flex items-center justify-center">
                        <div className="anim-network">
                            <div className="net-dot" style={{top: '10%', left: '10%'}}></div>
                            <div className="net-dot" style={{top: '80%', left: '30%', animationDelay: '0.2s'}}></div>
                            <div className="net-dot" style={{top: '40%', right: '10%', animationDelay: '0.4s'}}></div>
                            {/* Lines approximated */}
                            <div className="net-line" style={{top: '14%', left: '14%', width: '40px', transform: 'rotate(65deg)'}}></div>
                            <div className="net-line" style={{top: '84%', left: '34%', width: '50px', transform: 'rotate(-40deg)'}}></div>
                            <div className="net-line" style={{top: '44%', right: '14%', width: '60px', transform: 'rotate(-165deg)'}}></div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-sans">AI Automation</h3>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed">
                            Intelligent agents connecting the dots. We build neural networks that automate workflows and scale operations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 3: Web Development */}
            <div className="spotlight-card rounded-2xl p-8 min-h-[320px]">
                 <div className="spotlight-content">
                    <div className="mb-8 p-4 bg-white/5 w-fit rounded-lg h-[92px] w-[112px] flex items-center justify-start overflow-hidden">
                        <div className="anim-type">&lt;code/&gt;</div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-sans">Web Development</h3>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed">
                            Performant, pixel-perfect code. We craft immersive digital experiences that load fast and convert faster.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section id="process" className="relative z-10 w-full bg-black py-32 overflow-hidden select-none border-t border-grid">
    {/* Header */}
    <div className="container mx-auto px-6 relative mb-24">
      <h2 className="text-6xl md:text-8xl font-sans font-bold text-white tracking-tighter">Process<span className="text-accent">.</span></h2>
      <div className="absolute top-2 right-6 text-right hidden md:block">
        <p className="font-mono text-xs text-white uppercase tracking-widest leading-relaxed">
          SHORT LOOPS.<br />CLEAR CHECKPOINTS.
        </p>
        <div className="absolute -top-4 -right-4 w-4 h-4 border-t border-r border-accent"></div>
      </div>
    </div>

    {/* The Tree Layout */}
    <div className="container mx-auto px-6 relative flex flex-col gap-16 md:block md:min-h-[1000px]">

      {/* MOBILE NEURAL SPINE (Visible only on mobile) */}
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-white/5 md:hidden"></div>
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 md:hidden" preserveAspectRatio="none">
         <defs>
             <filter id="glow-mobile" x="-50%" y="-50%" width="200%" height="200%">
                 <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                 <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#FF3B30" floodOpacity="0.8"/>
                 <feMerge>
                     <feMergeNode in="coloredBlur" />
                     <feMergeNode in="SourceGraphic" />
                 </feMerge>
             </filter>
         </defs>
         {/* Vertical connection line */}
         <line x1="24" y1="0" x2="24" y2="100%" stroke="rgba(255,59,48,0.3)" strokeWidth="2" strokeDasharray="4 4" />
         
         {/* Animated particle moving down the spine */}
         <circle cx="24" cy="0" r="3" fill="#FF3B30" filter="url(#glow-mobile)">
            <animate attributeName="cy" from="0" to="100%" dur="3s" repeatCount="indefinite" />
         </circle>
      </svg>

      {/* NEURAL NETWORK WIRES (Desktop Only) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#FF3B30" floodOpacity="0.8"/>
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Define Paths for reuse by animation */}
        <path id="p1" d="M 16 10 C 26 10, 38 10, 48.5 10" fill="none" />
        <path id="p2" d="M 48.5 10 C 65 10, 75 10, 84 20" fill="none" />
        <path id="p3" d="M 84 20 C 84 35, 65 35, 50 48" fill="none" />
        <path id="p4" d="M 50 48 C 35 48, 25 60, 16 70" fill="none" />
        <path id="p5" d="M 16 70 C 16 80, 35 85, 50 85" fill="none" />
        <path id="p6" d="M 50 85 C 65 85, 75 85, 84 85" fill="none" />

        {/* Static Base Lines (Dim) */}
        <g stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.2" fill="none">
             <use href="#p1" />
             <use href="#p2" />
             <use href="#p3" />
             <use href="#p4" />
             <use href="#p5" />
             <use href="#p6" />
        </g>

        {/* Animated "Neural" Pulses - Fast Red Dashes */}
        <g stroke="#FF3B30" strokeWidth="0.3" fill="none" className="wire-path">
             <use href="#p1" />
             <use href="#p2" />
             <use href="#p3" />
             <use href="#p4" />
             <use href="#p5" />
             <use href="#p6" />
        </g>

        {/* Nodes (Connection Points) */}
        <g fill="#050505" stroke="#FF3B30" strokeWidth="0.4">
             <circle cx="16" cy="10" r="1" />
             <circle cx="48.5" cy="10" r="1" />
             <circle cx="84" cy="20" r="1" />
             <circle cx="50" cy="48" r="1" />
             <circle cx="16" cy="70" r="1" />
             <circle cx="50" cy="85" r="1" />
             <circle cx="84" cy="85" r="1" />
        </g>

        {/* Data Packets (Glowing Particles travelling lines) */}
        <g fill="#fff" filter="url(#glow-strong)">
            <circle r="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath href="#p1" />
                </animateMotion>
            </circle>
             <circle r="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0.3s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath href="#p2" />
                </animateMotion>
            </circle>
             <circle r="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0.6s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath href="#p3" />
                </animateMotion>
            </circle>
             <circle r="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0.9s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath href="#p4" />
                </animateMotion>
            </circle>
             <circle r="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" begin="1.2s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath href="#p5" />
                </animateMotion>
            </circle>
             <circle r="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" begin="1.5s" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                    <mpath href="#p6" />
                </animateMotion>
            </circle>
        </g>
      </svg>

      {/* 1. BRIEF */}
      <div className="relative w-full pl-16 md:pl-0 md:absolute md:left-[5%] md:top-[5%] md:w-[22%] group z-10">
        <div className="absolute left-[20px] top-6 w-2 h-2 bg-accent rounded-full md:hidden shadow-[0_0_10px_#FF3B30]"></div>
        <div className="w-16 h-20 border border-white/20 bg-dark/50 mb-6 group-hover:border-accent transition-colors backdrop-blur-sm hidden md:block"></div>
        <h3 className="text-2xl font-bold text-white mb-2 uppercase">Brief <span className="text-xs align-top text-gray-500">[01]</span></h3>
        <p className="text-xs font-mono text-gray-500 leading-relaxed">Define the business goal, primary KPI, and success thresholds. Map users, jobs-to-be-done, constraints, and risks.</p>
      </div>

      {/* 2. EXPLORE */}
      <div className="relative w-full pl-16 md:pl-0 md:absolute md:left-[37.5%] md:top-[5%] md:w-[22%] group z-10">
        <div className="absolute left-[20px] top-6 w-2 h-2 bg-accent rounded-full md:hidden shadow-[0_0_10px_#FF3B30]"></div>
        <div className="w-16 h-16 border border-white/20 bg-dark/50 mb-6 group-hover:border-accent transition-colors rounded-full backdrop-blur-sm hidden md:block"></div>
        <h3 className="text-2xl font-bold text-white mb-2 uppercase">Explore (AI) <span className="text-xs align-top text-gray-500">[02]</span></h3>
        <p className="text-xs font-mono text-gray-500 leading-relaxed">Generate wide option sets: concepts, layouts, headlines, and visual systems. Constrain by tone, brand voice, and length.</p>
      </div>

      {/* 3. CURATE */}
      <div className="relative w-full pl-16 md:pl-0 md:absolute md:right-[5%] md:top-[15%] md:w-[22%] group text-left md:text-right flex flex-col items-start md:items-end z-10">
        <div className="absolute left-[20px] top-6 w-2 h-2 bg-accent rounded-full md:hidden shadow-[0_0_10px_#FF3B30]"></div>
        <div className="w-16 h-20 border border-white/20 bg-dark/50 mb-6 group-hover:border-accent transition-colors backdrop-blur-sm hidden md:block"></div>
        <h3 className="text-2xl font-bold text-white mb-2 uppercase">Curate (Human) <span className="text-xs align-top text-gray-500">[03]</span></h3>
        <p className="text-xs font-mono text-gray-500 leading-relaxed">Select 2-3 strong directions based on signal, not novelty. Edit aggressively: remove ornament, compress copy, tighten hierarchy.</p>
      </div>

      {/* 4. PROTOTYPE */}
      <div className="relative w-full pl-16 md:pl-0 md:absolute md:left-[37.5%] md:top-[42%] md:w-[25%] group flex flex-col items-start md:items-center text-left md:text-center z-10">
        <div className="absolute left-[20px] top-6 w-2 h-2 bg-accent rounded-full md:hidden shadow-[0_0_10px_#FF3B30]"></div>
        <div className="w-24 h-16 border border-white/20 bg-dark/50 mb-6 group-hover:border-accent transition-colors backdrop-blur-sm hidden md:block"></div>
        <h3 className="text-2xl font-bold text-white mb-2 uppercase">Prototype <span className="text-xs align-top text-gray-500">[04]</span></h3>
        <p className="text-xs font-mono text-gray-500 leading-relaxed">Build interactive flows that mirror the target behavior. Set real copy, real lengths, and realistic content variability.</p>
      </div>

      {/* 5. TEST */}
      <div className="relative w-full pl-16 md:pl-0 md:absolute md:left-[5%] md:top-[65%] md:w-[22%] group z-10">
        <div className="absolute left-[20px] top-6 w-2 h-2 bg-accent rounded-full md:hidden shadow-[0_0_10px_#FF3B30]"></div>
        <div className="w-16 h-16 border border-white/20 bg-dark/50 mb-6 group-hover:border-accent transition-colors rounded-full backdrop-blur-sm hidden md:block"></div>
        <h3 className="text-2xl font-bold text-white mb-2 uppercase">Test <span className="text-xs align-top text-gray-500">[05]</span></h3>
        <p className="text-xs font-mono text-gray-500 leading-relaxed">Run A/B or multivariate where impact is measurable. Track GA4 events, funnels, and time-to-task.</p>
      </div>

      {/* 6. SHIP */}
      <div className="relative w-full pl-16 md:pl-0 md:absolute md:left-[37.5%] md:top-[80%] md:w-[25%] group flex flex-col items-start md:items-center text-left md:text-center z-10">
        <div className="absolute left-[20px] top-6 w-2 h-2 bg-accent rounded-full md:hidden shadow-[0_0_10px_#FF3B30]"></div>
        <div className="w-20 h-12 border border-white/20 bg-dark/50 mb-6 group-hover:border-accent transition-colors rounded-[50%] backdrop-blur-sm hidden md:block"></div>
        <h3 className="text-2xl font-bold text-accent mb-2 uppercase">Ship <span className="text-xs align-top text-gray-500">[06]</span></h3>
        <p className="text-xs font-mono text-gray-500 leading-relaxed">Harden components, states and performance budgets. Finalize accessibility, metadata, and analytics.</p>
      </div>

      {/* 7. REQUEST PRICING */}
      <div className="relative w-full md:absolute md:right-[5%] md:top-[75%] md:w-[22%] h-auto border border-white/20 p-6 flex flex-col justify-between group hover:border-accent transition-colors bg-black z-10">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></div>
        <div className="mb-8">
          <div className="w-full h-32 border border-white/10 mb-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-4 border border-white/10 opacity-30"></div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1 uppercase">Request</h3>
          <h3 className="text-xl font-bold text-white mb-6 uppercase text-right">Pricing.</h3>
          <button className="w-full border border-accent text-accent font-mono text-xs py-3 hover:bg-accent hover:text-white transition-colors uppercase">Contact Now</button>
        </div>
      </div>
    </div>
  </section>
);

const Chatbot = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Relative transform
    const dragRef = useRef<HTMLDivElement>(null);
    const startPos = useRef({ x: 0, y: 0 });
    const currentTranslate = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startPos.current = { x: e.clientX, y: e.clientY };
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const dx = e.clientX - startPos.current.x;
            const dy = e.clientY - startPos.current.y;
            setPosition({
                x: currentTranslate.current.x + dx,
                y: currentTranslate.current.y + dy
            });
        };

        const handleMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
                currentTranslate.current = position;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, position]);

    return (
        <div 
            ref={dragRef}
            className="fixed bottom-8 right-8 z-[9999] cursor-grab active:cursor-grabbing select-none"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            onMouseDown={handleMouseDown}
        >
            <style>{`
                @keyframes wave {
                    0% { transform: rotate(0deg); }
                    20% { transform: rotate(-15deg); }
                    40% { transform: rotate(10deg); }
                    60% { transform: rotate(-15deg); }
                    80% { transform: rotate(0deg); }
                    100% { transform: rotate(0deg); }
                }
                .robot-hand { animation: wave 2.5s infinite ease-in-out; transform-origin: bottom right; }
            `}</style>
            <div className="relative group">
                {/* Speech Bubble */}
                <div className="absolute bottom-full right-0 mb-4 w-64 bg-dark border border-accent/30 p-4 rounded-xl rounded-br-none shadow-[0_0_20px_rgba(255,59,48,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-white text-xs font-mono leading-relaxed">
                        Hello! I'm <span className="text-accent font-bold">Jadu</span> your Aumeverse guide. Ask me anything!
                    </p>
                </div>

                {/* Robot Avatar */}
                <div className="w-16 h-16 bg-dark border border-white/20 rounded-full flex items-center justify-center relative shadow-lg hover:border-accent transition-colors">
                     {/* Simplified CSS Robot */}
                     <div className="relative w-10 h-10">
                        {/* Head */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-5 bg-gray-300 rounded-md overflow-hidden z-10 border border-gray-500">
                             <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-200"></div>
                             {/* Eyes */}
                             <div className="absolute top-1.5 left-1 w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                             <div className="absolute top-1.5 right-1 w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                        </div>
                        {/* Antenna */}
                         <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gray-500"></div>
                         <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                        {/* Body */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-5 bg-gray-400 rounded-b-xl border border-gray-500"></div>
                        {/* Hand (Waving) */}
                        <div className="robot-hand absolute top-4 -right-1 w-2 h-4 bg-gray-300 rounded-full border border-gray-500"></div>
                     </div>
                     {/* Glow behind */}
                     <div className="absolute inset-0 bg-accent/20 rounded-full blur-md -z-10 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

const Cases = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      cardsEffect: {
        perSlideOffset: 10,
        perSlideRotate: 2,
        slideShadows: false,
      },
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });
  }, []);

  return (
    <section id="cases" className="relative z-10 w-full bg-dark py-32 border-t border-grid overflow-hidden">
      <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
        <h2 className="text-6xl lg:text-8xl font-sans font-bold text-white tracking-tighter">Cases.</h2>
        <div className="hidden md:flex gap-4">
          <button className="swiper-button-prev-custom w-12 h-12 border border-grid rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"><i className="ph ph-arrow-left"></i></button>
          <button className="swiper-button-next-custom w-12 h-12 border border-grid rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"><i className="ph ph-arrow-right"></i></button>
        </div>
      </div>
      <div className="w-full flex justify-center pb-20 px-4">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {/* Case 1 */}
            <div className="swiper-slide group relative">
              <img src="https://images.unsplash.com/photo-1620641788421-7f1c338e4200?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Case 1" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-accent text-white text-[10px] font-mono px-2 py-1 mb-2 inline-block">WEBSITE</span>
                <h3 className="text-2xl font-bold font-sans">Taniko Fashion</h3>
                <p className="text-xs font-mono text-gray-400 mt-1">SIGN-UPS +27%</p>
              </div>
            </div>
            {/* Case 2 */}
            <div className="swiper-slide group relative">
              <img src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Case 2" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-accent text-white text-[10px] font-mono px-2 py-1 mb-2 inline-block">BRANDING</span>
                <h3 className="text-2xl font-bold font-sans">Neon Bank</h3>
                <p className="text-xs font-mono text-gray-400 mt-1">AOV +12%</p>
              </div>
            </div>
            {/* Case 3 */}
            <div className="swiper-slide group relative">
              <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Case 3" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-accent text-white text-[10px] font-mono px-2 py-1 mb-2 inline-block">VIDEO</span>
                <h3 className="text-2xl font-bold font-sans">Vello Bikes</h3>
                <p className="text-xs font-mono text-gray-400 mt-1">CTR 4.5%</p>
              </div>
            </div>
            {/* Case 4 */}
            <div className="swiper-slide group relative">
              <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Case 4" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-accent text-white text-[10px] font-mono px-2 py-1 mb-2 inline-block">SYSTEM</span>
                <h3 className="text-2xl font-bold font-sans">FMP Group</h3>
                <p className="text-xs font-mono text-gray-400 mt-1">RETENTION +15%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 font-mono text-xs text-gray-500 md:hidden">Swipe to explore →</div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="relative z-10 w-full bg-dark py-32 border-t border-grid">
    <div className="container mx-auto px-6">
      <h2 className="text-6xl lg:text-9xl font-sans font-bold text-white tracking-tighter mb-24">Testimonials.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="border-l border-accent pl-8">
          <p className="text-2xl text-white font-sans leading-relaxed mb-8">
            "Their AI rounds gave us dozens of on-brand hero options in two days. The team cut noise, tightened copy, and aligned the catalog. Checkout friction dropped."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-accent">KW</div>
            <div>
              <p className="text-sm font-bold text-white">Kate Wellington</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">CMO @ Alder Home</p>
            </div>
          </div>
        </div>
        <div className="border-l border-white/10 pl-8 opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-2xl text-white font-sans leading-relaxed mb-8">
            "We moved from 'pretty pages' to a clear story with one primary action per screen. Average order value increased 12% after bundles."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-white">PD</div>
            <div>
              <p className="text-sm font-bold text-white">Paul Davidson</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Founder @ Vello Bikes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="relative z-10 w-full bg-dark py-32 border-t border-grid">
    <div className="container mx-auto px-6">
      <h2 className="text-6xl lg:text-9xl font-sans font-bold text-white tracking-tighter mb-24">FAQ.</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 bg-grid border border-grid gap-px">

        {/* 1. PRICE (Top Left) */}
        <div className="bg-dark p-10 relative group h-full flex flex-col">
          {/* Red Accent: Top Left */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-80"></div>

          <h4 className="text-2xl text-white font-sans font-bold mb-6 uppercase tracking-tight">How do you price?</h4>
          <p className="text-gray-400 text-sm leading-relaxed font-mono">
            Fixed-scope sprints with defined deliverables and KPIs. Transparent milestones, no hourly drift, and optional extensions for testing or content runs. You see scope, dates and acceptance criteria up front.
          </p>
        </div>

        {/* 2. ROUNDS (Top Right - Wide - Col Span 2) */}
        <div className="bg-dark p-10 relative group lg:col-span-2 h-full overflow-hidden">
          {/* Red Accent: Top Left */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-80"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center h-full relative z-10">
            <div className="max-w-md">
              <h4 className="text-2xl text-white font-sans font-bold mb-6 uppercase tracking-tight">How many rounds of revisions are included?</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-mono">
                Two structured rounds per sprint: after Curation and after Prototype. Small copy/spacing fixes continue until Ship cut-off.
              </p>
            </div>

            {/* Eye Image */}
            <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 mt-8 md:mt-0 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover rounded-full mix-blend-lighten opacity-80 border border-white/10" alt="Eye" />
            </div>
          </div>
        </div>

        {/* 3. DIAMOND IMAGE (Middle Left) */}
        <div className="bg-dark relative group h-96 flex items-center justify-center overflow-hidden">
          {/* Red Accent: Top Left */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-80 z-20"></div>

          {/* Diamond Image */}
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" alt="Diamond" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50"></div>

          {/* Floating Element Effect */}
          <div className="absolute w-32 h-32 border border-white/20 rotate-45 backdrop-blur-sm animate-pulse mix-blend-overlay"></div>
        </div>

        {/* 4. RIGHTS (Middle Center) */}
        <div className="bg-dark p-10 relative group h-96 flex flex-col justify-between">
          {/* Red Accent: Top Left */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-80"></div>

          <h4 className="text-2xl text-white font-sans font-bold uppercase tracking-tight">Who owns the rights to AI-generated assets?</h4>
          <p className="text-gray-400 text-sm leading-relaxed font-mono">
            You do after final payment. We assign you a worldwide, perpetual, commercial license — or full copyright where applicable under current laws.
          </p>
        </div>

        {/* 5. TIMELINE (Right Vertical - Tall - Row Span 2) */}
        <div className="bg-dark p-10 relative group lg:row-span-2 h-full flex flex-col justify-between border-l border-grid min-h-[500px]">
          {/* Red Accent: Top Left */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-80"></div>

          <div>
            <h4 className="text-2xl text-white font-sans font-bold mb-6 uppercase tracking-tight">Typical Timeline?</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-mono">
              10-21 days for a focused site and content set. Week 1: brief, AI exploration, human curation. Weeks 2-3: prototype, test, ship, and verify metrics; larger scopes extend in repeatable sprints.
            </p>
          </div>

          {/* Hourglass Visual */}
          <div className="w-full relative h-64 mt-8 flex items-end justify-center">
            <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop" className="w-40 h-56 object-cover opacity-60 mix-blend-screen mask-image-gradient" style={{ maskImage: 'linear-gradient(to top, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)' }} alt="Hourglass" />

            {/* 3D geometric shape overlay */}
            <div className="absolute bottom-10 w-20 h-20 border-t border-r border-accent/50 rotate-45"></div>
            <div className="absolute bottom-20 w-20 h-20 border-b border-l border-white/20 rotate-45"></div>
          </div>
        </div>

        {/* 6. SHIP WITHOUT AI (Bottom Wide - Col Span 2) */}
        <div className="bg-dark p-10 relative group lg:col-span-2 h-full overflow-hidden">
          {/* Red Accent: Top Left */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-80"></div>

          <div className="flex flex-col md:flex-row justify-between items-center h-full relative z-10">
            <div className="max-w-lg">
              <h4 className="text-2xl text-white font-sans font-bold mb-6 uppercase tracking-tight">Do you ship without AI?</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-mono">
                Yes. We can run a fully human process end-to-end: research, copy, design, build, test. We use AI when speed and breadth help, then keep only what meets the brief.
              </p>
            </div>

            {/* Robot Head Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 mt-8 md:mt-0 relative ml-8 flex-shrink-0">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl"></div>
              <img src="https://images.unsplash.com/photo-1535378437327-b7128d633592?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover rounded-lg grayscale contrast-125 border border-white/10" alt="Robot" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="relative z-10 w-full bg-dark pt-32 pb-12 border-t border-grid">
    <div className="container mx-auto px-6">

      <h2 className="text-[clamp(5rem,15vw,12rem)] font-bold font-sans text-white leading-none tracking-tighter mb-4">
        Tell us.
      </h2>
      <p className="text-xl text-gray-400 mb-16">We reply within a day.</p>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 max-w-5xl">
        {/* Left Col */}
        <div className="space-y-12">
          <div className="group">
            <label className="block font-mono text-[10px] text-accent mb-2 uppercase tracking-widest">Identify Yourself</label>
            <input type="text" placeholder="Name or Company" className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-sans text-white placeholder:text-white/20 transition-all" />
          </div>
          <div className="group">
            <label className="block font-mono text-[10px] text-accent mb-2 uppercase tracking-widest">Budget</label>
            <select className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-sans text-white appearance-none cursor-pointer">
              <option className="bg-dark text-gray-400" value="" disabled selected>$1000 - $5000</option>
              <option className="bg-dark" value="s">$5k - $10k</option>
              <option className="bg-dark" value="m">$10k - $25k</option>
              <option className="bg-dark" value="l">$25k+</option>
            </select>
          </div>
        </div>

        {/* Right Col */}
        <div className="space-y-12">
          <div className="group">
            <label className="block font-mono text-[10px] text-accent mb-2 uppercase tracking-widest">Link</label>
            <input type="text" placeholder="https://" className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-sans text-white placeholder:text-white/20 transition-all" />
          </div>
          <div className="group">
            <label className="block font-mono text-[10px] text-accent mb-2 uppercase tracking-widest">Message</label>
            <textarea rows={1} placeholder="Project details..." className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-sans text-white placeholder:text-white/20 transition-all resize-none"></textarea>
          </div>
        </div>
      </form>

      <div className="w-full bg-accent text-white font-sans font-bold text-center py-6 hover:bg-white hover:text-black transition-colors cursor-pointer text-xl uppercase tracking-widest">
        Contact Now
      </div>

      {/* Footer Info */}
      <div className="flex flex-col md:flex-row justify-between items-end mt-24 pt-8 border-t border-grid text-gray-500 font-mono text-[10px] uppercase tracking-widest">
        <div>
          <p className="text-white mb-2">hello@aumeverse.studio</p>
          <p>Privacy note: Your data stays here.<br />We don't train models on client data.</p>
        </div>
        <div className="flex space-x-6 mt-8 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 1. LENIS SETUP
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. FISHEYE ANIMATION LOGIC (Needs Lenis and GSAP Ticker)
    const updateFisheye = () => {
        const serviceItems = document.querySelectorAll('.service-item');
        const centerY = window.innerHeight / 2;
        
        serviceItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemCenterY = rect.top + rect.height / 2;
            const dist = Math.abs(centerY - itemCenterY);
            
            const maxDist = 400;
            let scale = 1 - (dist / maxDist) * 0.4; 
            let opacity = 1 - (dist / maxDist) * 0.7;

            scale = Math.max(0.6, Math.min(1.1, scale)); 
            opacity = Math.max(0.2, Math.min(1, opacity)); 

            gsap.set(item, { scale: scale, opacity: opacity });
        });
    }
    
    // Bind to lenis scroll and gsap ticker for smoothness
    lenis.on('scroll', updateFisheye);
    gsap.ticker.add(updateFisheye);


    // 3. GLOBAL CURSOR LOGIC
    const handleCursorMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', handleCursorMove);

    const interactives = document.querySelectorAll('a, button, input, textarea, select, .swiper-slide, .faq-card, .spotlight-card');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = "translate(-50%, -50%) scale(2.5)";
          cursorRef.current.style.borderColor = "transparent";
          cursorRef.current.style.backgroundColor = "rgba(255, 59, 48, 0.5)";
        }
      });
      el.addEventListener('mouseleave', () => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
          cursorRef.current.style.borderColor = "#FF3B30";
          cursorRef.current.style.backgroundColor = "transparent";
        }
      });
    });

    return () => {
       document.removeEventListener('mousemove', handleCursorMove);
       gsap.ticker.remove(updateFisheye);
       // Cleanup listeners ideally, though in a single page app they persist
    }
  }, []);

  return (
    <>
      <div className="noise-overlay"></div>
      <div id="cursor" ref={cursorRef}></div>
      <Navigation />
      <main className="w-full relative z-10">
        <Hero />
        <Reveal />
        <HowItWorks />
        <Services />
        <Process />
        <Cases />
        <Testimonials />
        <FAQ />
        <Footer />
        <Chatbot />
      </main>
    </>
  );
}