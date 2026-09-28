import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import StudentJourney from "@/components/sections/StudentJourney";
import AppShowcase from "@/components/sections/AppShowcase";
import StudyPlanning from "@/components/sections/StudyPlanning";
import CareerRoadmap from "@/components/sections/CareerRoadmap";
import StudentNetwork from "@/components/sections/StudentNetwork";
import Founder from "@/components/sections/Founder";
import ClosedTesting from "@/components/sections/ClosedTesting";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

import GradientBackground from "@/components/animations/GradientBackground";
import ParticleBackground from "@/components/animations/ParticleBackground";
import FloatingElements from "@/components/animations/FloatingElements";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f8fbff]">

      {/* =====================================================
          GLOBAL BACKGROUND ANIMATIONS
          ===================================================== */}

      <GradientBackground />
      <ParticleBackground />
      <FloatingElements />

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <Navbar />

      {/* =====================================================
          WEBSITE CONTENT
          ===================================================== */}

      <div className="relative z-10">

        {/* HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* PROBLEM */}
        <section id="problem">
          <ProblemSolution />
        </section>

        {/* FEATURES */}
        <section id="features">
          <Features />
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* STUDENT JOURNEY */}
        <section id="journey">
          <StudentJourney />
        </section>

        {/* APP */}
        <section id="app">
          <AppShowcase />
        </section>

        {/* STUDY PLANNING */}
        <section id="study">
          <StudyPlanning />
        </section>

        {/* CAREER ROADMAP */}
        <section id="career">
          <CareerRoadmap />
        </section>

        {/* STUDENT NETWORK */}
        <section id="network">
          <StudentNetwork />
        </section>

        {/* FOUNDER */}
        <section id="founder">
          <Founder />
        </section>

        {/* CLOSED TESTING */}
        <section id="closed-testing">
          <ClosedTesting />
        </section>

        {/* FAQ */}
        <section id="faq">
          <FAQ />
        </section>

        {/* FINAL CTA */}
        <section id="final-cta">
          <FinalCTA />
        </section>

      </div>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />

    </main>
  );
}