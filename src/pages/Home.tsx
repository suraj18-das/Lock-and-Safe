"use client";
import { Suspense, useState, useEffect } from "react";
import AbstractShapes from "./AbstractShapes";
import Typewriter from "./Typewriter";
import { useParallax } from "@/hooks/use-parallax";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const parallaxOffset = useParallax(0.3);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* 3D Abstract Shapes Background with Parallax */}
      <div style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <Suspense fallback={null}>
          <AbstractShapes />
        </Suspense>
      </div>

      {/* Floating particles with Parallax */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce-slow"></div>
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-bounce-slow"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-bounce-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 sm:mb-6 animate-fade-in-up opacity-0 [animation-delay:100ms]">
            <span className="text-base sm:text-lg md:text-xl font-bold text-primary uppercase tracking-wider hover:scale-110 inline-block transition-transform duration-300">
              Transformative Intelligence
            </span>
          </div>

          <h1 className="text-[clamp(2rem,10vw,8rem)] font-black leading-[0.95] tracking-tighter text-foreground mb-6 sm:mb-8">
            <span className="block animate-fade-in-up opacity-0 [animation-delay:200ms] hover:translate-x-4 transition-transform duration-300 inline-block">
              "HERE'S OUR
            </span>
            <span className="block animate-fade-in-up opacity-0 [animation-delay:400ms] hover:translate-x-4 transition-transform duration-300 inline-block">
              OUTLAY.
            </span>
            <span className="block animate-fade-in-up opacity-0 [animation-delay:600ms] text-primary hover:scale-105 transition-transform duration-300 inline-block">
              WHERE ARE THE
            </span>
            <span className="block animate-fade-in-up opacity-0 [animation-delay:800ms] text-primary hover:scale-105 transition-transform duration-300 inline-block">
              OUTCOMES?"
            </span>
          </h1>

          <div className="text-base sm:text-lg md:text-xl font-medium text-foreground/90 max-w-3xl mb-4 sm:mb-6 animate-fade-in-up opacity-0 [animation-delay:1000ms] leading-relaxed">
            <p>
              Algorithms are paid to spend your money efficiently, not to make
              your brand unforgettable. Efficiency gets you seen. Effectiveness
              gets you picked.
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl font-medium text-foreground/90 max-w-3xl mb-6 sm:mb-8 animate-fade-in-up opacity-0 [animation-delay:1200ms]">
            The system is rigged for spending. Let's rig it for outcomes.
          </p>

          <div className="animate-fade-in-up opacity-0 [animation-delay:1400ms]">
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground transition-colors duration-300">
              Switch.{" "}
              <span className="text-primary">
                {showTypewriter ? (
                  <TypewriterText
                    texts={[
                      "From efficiency to effectiveness.",
                      "From impressions to impact.",
                      "From marketing to momentum.",
                      "From visibility to value.",
                    ]}
                    typingSpeed={70}
                    deletingSpeed={40}
                    delayBetween={1500}
                    cursorColor="hsl(var(--primary))"
                  />
                ) : (
                  <span className="opacity-0">Loading...</span>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/10 to-transparent z-10" />
    </section>
  );
};

export default Hero;
