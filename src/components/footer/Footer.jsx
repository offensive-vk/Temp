import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

// TODO: Add MY Custom Icons from Static Repo.
export const Footer = ({ type }) => {
  const { t } = useTranslation();
  const icons = [
    {
      path: t("https://github.com/offensive-vk"),
      src: "https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/github/github-original.svg",
      title: "Github",
      alt: 'github logo',
    },
    {
      path: t("https://imdb.com"),
      src: "/svg/imdb.svg",
      title: "IMDB",
      alt: 'IMDB',
    },
    {
      path: t("https://tailwindcss.com"),
      src: "https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/tailwindcss/tailwindcss-original.svg",
      title: "Tailwind CSS",
      alt: "TailwindCSS"
    },
    {
      path: t("https://vite.dev/"),
      src: "https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/vitejs/vitejs-original.svg",
      title: "Vite",
      alt: "Vite"
    },
    {
      path: t("https://reactjs.org/"),
      src: "https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/react/react-original.svg",
      title: "React",
      alt: "React"
    },
    {
      path: t("https://www.netlify.com/"),
      src: "https://cdn.jsdelivr.net/gh/offensive-vk/Icons@master/docker/docker-original.svg",
      title: "Docker",
      alt: "Docker"
    }
  ];
  return (
    <footer
      className={` border-gray-200 w-full ${
        type === "no single" ? "bottom-0" : "block"
      }`}
      style={{ backdropFilter: "blur(25px)", borderTop: "2px solid #fff" }}
    >
      <div className={`flex justify-around items-center p-3 pt-1`}>
        <div className="flex justify-left md:justify-start pt-2 md:pt-0 md:mt-0">
          <h3 className="text-white text-xs md:text-base">&copy; Copyright 2024 - Present. Vedansh and Authors.</h3>
        </div>
        <div className="flex items-center justify-left md:justify-end mt-2 md:mt-0">
          <h3 className="text-white text-xs md:text-base flex justify-center">
            <a href="https://github.com/offensive-vk">(offensive-vk)</a>
          </h3>
          {icons.map((icon) => (
            <Link
              to={icon.path}
              key={icon.alt}
              target="_blank"
              className="p-2 hover:rounded-lg hover:bg-cyan-900 ease-in-out duration-300 hover:opacity-90 inline-block"
            >
              <LazyLoadImage
                src={icon.src}
                className="h-4 w-4 md:h-5 md:w-5"
                alt={icon.alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
