import React from "react";
import Hero from "../components/sections/Hero";
import MainPage from "../components/layouts/MainPage";

export default function About() {
  return (
    <MainPage>
      <Hero
        title="Michelle Watts' Portfolio"
        subtitle="Hello! I am a digital campaigner at Unions NSW and a web developer. I have a background in graphic/web design and audio engineering. Check out some of my work by clicking the projects link in the navigation."
        image="/img/my-face.jpeg"
        ctaText="LinkedIn"
        ctaLink="https://www.linkedin.com/in/michelle-e-watts/"
        ctaText2="GitHub"
        ctaLink2="https://github.com/michellewatts20000"
      />
      
    </MainPage>
  );
}
