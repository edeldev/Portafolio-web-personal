import { IContainerPage } from "./types";

export const ContainerPage = (props: IContainerPage) => {
  const { children } = props;
  return (
    <section className="px-20 md:px-0 flex flex-col items-center justify-center gap-5 text-6xl pb-40">
      {children}
    </section>
  );
};
