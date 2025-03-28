import { CoverParticle, ProjectsPage, TransitionPage } from "@/components";
import { ContainerPage } from "@/components/ContainerPage";

const Proyects = () => {
  return (
    <main>
      <TransitionPage />
      <CoverParticle />

      <ContainerPage>
        <ProjectsPage />
      </ContainerPage>
    </main>
  );
};

export default Proyects;
