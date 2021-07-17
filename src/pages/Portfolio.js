import React from "react";
import Project from "../components/sections/Project";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Portfolio() {
  return (
    <LandingLayout>
      <Project
        title="Project 1"
        subtitle="This is my first project"
        image=""
        ctaText="LinkedIn"
        ctaLink="https://www.linkedin.com/in/michelle-e-watts/"
      />
    </LandingLayout>
  );
}
