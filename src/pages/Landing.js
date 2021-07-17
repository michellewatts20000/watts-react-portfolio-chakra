import React from "react";
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Michelle Watts Portfolio"
        subtitle="Hello! I am a digital campaigner at Unions NSW and a web developer. I have a background in graphic/web design & audio engineering. Read more about me ... or jump straight to my projects."
        image="/img/my-face.jpeg"
        ctaText="LinkedIn"
        ctaLink="https://www.linkedin.com/in/unions-nsw-882118175/"
      />
    </LandingLayout>
  );
}
