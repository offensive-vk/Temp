import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ItemGridSearch = ({ movieSerie }) => {
  const { t } = useTranslation();
  let movieOrSerie = movieSerie.media_type === "movie" ? "movie" : "serie";
  let titleOrName = movieSerie.media_type === "movie" ? "title" : "name";
  let releasedOrAired = movieSerie.media_type === "movie"
    ? "release_date"
    : "first_air_date";

  return (
    <div className=" w-full min-w-[500] min-h-[500]  max-w-full bg-slate-900 shadow-md rounded-2xl overflow-hidden mx-auto border-2 border-transparent hover:border-[#2074F6]">
      <Link
        to={`/${movieOrSerie}/${
          movieSerie[titleOrName]
            ?.toLowerCase()
            .replace("?", "")
            .split(" ")
            .join("-")
        }/${movieSerie.id}`}
      >
        <div
          className="overflow-hidden rounded-xl relative text-white h-full"
          data-movie-id={movieSerie.id}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-[#1d273d2b] to-transparent" />

          <div className="relative cursor-pointer group z-10 p-5 pb-0">
            <div className="poster__info align-self-end w-full">
              <div className="h-64 md:h-64" />
              <div className="space-y-3">
                <div className="flex flex-col space-y-2 inner">
                  <h3 className="text-xl font-bold text-white min-h-[56px] pb-5 md:pb-0">
                    {movieSerie[titleOrName]}
                  </h3>
                </div>
                <div className="hidden md:flex justify-around mb-0 pb-0">
                  <div className="relative text-sm">
                    <div className="popularity">{movieSerie.popularity}</div>
                    <div className="text-xs text-gray-400">
                      {t("Popularity")}:
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="text-sm">{movieSerie[releasedOrAired]}</div>
                    <div className="text-xs text-gray-400">
                      {t("Release Date")}:
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="text-sm">
                      {movieSerie.media_type.substr(0, 1).toUpperCase() +
                        movieSerie.media_type.substr(1)}
                    </div>
                    <div className="text-xs text-gray-400">
                      {t("Media Type")}:
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col overview">
                  <p className="text-xs text-gray-100 mb-6">
                    {movieSerie?.overview?.substr(0, 120) + "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <LazyLoadImage
            alt={`${movieSerie[titleOrName]}`}
            className="absolute inset-0 transform w-full -translate-y-4 img-mask"
            src={`${
              movieSerie.poster_path
                ? `https://image.tmdb.org/t/p/w780/${movieSerie.poster_path}`
                : "/movie-play.svg"
            }`}
          />
        </div>
      </Link>
    </div>
  );
};
