import React from "react";
import { AboutMePage, CoverParticle, TransitionPage } from "@/components";
import { ContainerPage } from "@/components/ContainerPage";

const AboutMe = () => {
  return (
    <main>
      <TransitionPage />
      <CoverParticle />

      <ContainerPage>
        <AboutMePage />
      </ContainerPage>
    </main>
  );
};

export default AboutMe;
