import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetRuntime } from "../../hooks";
import { useCustomFunctions } from "../../helpers";
import { useTranslation } from "react-i18next";

export const ItemGridMovies = ({ movie }) => {
  const { t } = useTranslation();
  const param = `movie/${movie.id}`;
  const [runTimes, setRuntimes] = useState(param);
  const { runtime, loading } = useGetRuntime(runTimes);

  useEffect(() => {
    setRuntimes(param);
  }, [loading]);

  const { time_convert, colorScore } = useCustomFunctions();

  return (
    <div className="w-full min-w-[512] min-h-[512] max-w-full bg-slate-900 shadow-md overflow-hidden mx-auto border-2 border-transparent hover:border-[#05af35] ease-in-out duration-300 hover:rounded-xl">
      <Link
        to={`/movie/${
          movie.title
            .toLowerCase()
            .replace("?", "")
            .split(" ")
            .join("-")
        }/${movie?.id}`}
      >
        <div
          className="overflow-hidden relative text-white h-full w-full"
          data-movie-id={movie?.id}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-[#1d273d2b] to-transparent" />

          <div className="relative cursor-pointer group z-10 p-4 pb-0">
            <div className=" align-self-end w-full">
              <div className="h-[18.7rem]" />
              <div className="space-y-1">
                <div className="flex flex-col space-y-2 inner">
                  <h3 className="font-[ArialNova-Light] text-base md:text-xl text-white min-h-[56px] pb-5 md:pb-0">
                    {movie?.title}
                  </h3>
                </div>
                <div className="hidden md:flex justify-around mb-0 pb-0">
                  <div className="relative text-sm">
                    <div
                      className={`flex justify-center border rounded-md min-w-[40px] ${
                        colorScore(
                          movie?.vote_average.toFixed(1),
                        )
                      }`}
                    >
                      <div className="text-base text-center font-bold text-black p-1">
                        {movie?.vote_average.toFixed(1)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col p-1">
                    <div className="text-xs">{movie?.release_date}</div>
                    <div className="text-xs text-gray-400">
                      {t("Release Date")}
                    </div>
                  </div>
                  <div className="flex flex-col p-1 min-w-[76px]">
                    <div className="text-xs min-w-[68px] min-h-[16px]">
                      {loading ? "1h 33min" : time_convert(runtime?.runtime)}
                    </div>
                    <div className="text-xs text-gray-400">{t("Runtime")}</div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col overview">
                  <p className="text-xs text-gray-400 mb-5 mt-0 min-h-[56px]">
                    {movie?.overview?.substr(0, 120) + "..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            alt={`Image of ${movie.title}`}
            rel="preload"
            width={"300"}
            height={"450"}
            className="absolute inset-0 transform w-full -translate-y-4 img-mask"
            src={`${
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`
                : "/movie-play.svg"
            }`}
          />
        </div>
      </Link>
    </div>
  );
};
