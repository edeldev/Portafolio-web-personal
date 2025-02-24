import { LetterGlitch, TransitionPage } from "@/components";

const PageNotFound = () => {
  return (
    <main>
      <TransitionPage />
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />

      <div className="absolute top-0 flex justify-center items-center w-full h-full">
        <div className="text-center leading-none">
          <p className="text-[4rem] md:text-[10rem] font-bold">404</p>
          <p className="text-[4rem] md:text-[6rem]">Page not found!</p>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
