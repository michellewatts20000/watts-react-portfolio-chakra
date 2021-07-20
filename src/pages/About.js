import React from "react";
import Hero from "../components/sections/Hero";
import MainPage from "../components/layouts/MainPage";
import myFace from "../components/images/my-face.jpeg";

export default function About() {
  return (
    <MainPage>
      <Hero
        title="Hi! My name is Michelle. I'm a"
        subtitle="I am a digital campaigner at Unions NSW and a web developer. I have a background in graphic/web design and audio engineering. Check out some of my work by clicking the portfolio link in the navigation."
        image={myFace}
        ctaText="LinkedIn"
        ctaLink="https://www.linkedin.com/in/michelle-e-watts/"
        ctaText2="GitHub"
        ctaLink2="https://github.com/michellewatts20000"
      />

    </MainPage>
  );
}
