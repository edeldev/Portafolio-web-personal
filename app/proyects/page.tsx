import { CoverParticle, ProyectsPage, TransitionPage } from "@/components";
import { ContainerPage } from "@/components/ContainerPage";

const Proyects = () => {
  return (
    <main>
      <TransitionPage />
      <CoverParticle />

      <ContainerPage>
        <ProyectsPage />
      </ContainerPage>
    </main>
  );
};

export default Proyects;
