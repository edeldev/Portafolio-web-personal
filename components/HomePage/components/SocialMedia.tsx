import { SOCIAL_MEDIA } from "@/utils/data";

export const SocialMedia = () => {
  return (
    <div className="flex justify-between gap-5 z-9">
      {SOCIAL_MEDIA?.map((social) => (
        <a
          key={social?.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform  hover:scale-150 duration-500 ease-in-out text-secondary dark:text-black"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
