import { ContactPage, CoverParticle, TransitionPage } from "@/components";
import { ContainerPage } from "@/components/ContainerPage";
import React from "react";

const Contact = () => {
  return (
    <main>
      <TransitionPage />
      <CoverParticle />

      <ContainerPage>
        <ContactPage />
      </ContainerPage>
    </main>
  );
};

export default Contact;
