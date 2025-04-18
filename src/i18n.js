import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      movies: "movies",
      series: "series",
      Search: "Search",
      Home: "Home",
      Movies: "Movies",
      Popular: "Popular",
      Upcoming: "Upcoming",
      "Top Rated": "Top Rated",
      Series: "Series",
      "On The Air": "On The Air",
      "Origin Country": "Origin Country",
      Cast: "Cast",
      "Spoken Languages": "Spoken Languages",
      Status: "Status",
      "Release Date": "Release Date",
      Budget: "Budget",
      Revenue: "Revenue",
      Popularity: "Popularity",
      Runtime: "Runtime",
      Tagline: "Tagline",
      "Vote Count": "Vote Count",
      Seasons: "Seasons",
      Episodes: "Episodes",
      "Last Air Date": "Last Air Date",
      "Production Companies": "Production Companies",
      Crew: "Crew",
      Recommendations: "Recommendations",
      "Watch Trailer": "Watch Trailer",
      Streaming: "Streaming",
      "Results for": "Results for",
      "There are no results to show for": "There are no results to show for",
      "Media Type": "Media Type",
      "Directed By": "Directed By",
      "Not Found": "Not Found",
      "Writed By": "Writed By",
      "Music by": "Music by",
      "Cinematography by": "Cinematography by",
      "Editing by": "Editing by",
      "Produced by": "Produced by",
      Biography: "Biography",
      "Known For": "Known For",
      "Personal Info": "Personal Info",
      "Date of Death": "Date of Death",
      "Place of Birth": "Place of Birth",
      Gender: "Gender",
      "Not set / not specified": "Not set / not specified",
      Female: "Female",
      Male: "Male",
      "Non-binary": "Non-binary",
      Birthday: "Birthday",
      "show less": "show less",
      "read more": "read more",
      "Top Rated Movies": "Top Rated Movies",
      "Popular Movies": "Popular Movies",
      "Upcoming Movies": "Upcoming Movies",
      "Popular Series": "Popular Series",
      "On The Air Series": "On The Air Series",
      "Top Rated Series": "Top Rated Series",
    },
  },
  es: {
    translation: {
      movies: "películas",
      series: "series",
      Search: "Buscar",
      Home: "Inicio",
      Movies: "Películas",
      Popular: "Popular",
      Upcoming: "Próximamente",
      "Top Rated": "Mejor valorados",
      Series: "Series",
      "On The Air": "Al aire",
      "Origin Country": "País de origen",
      Cast: "Reparto",
      "Spoken Languages": "Idiomas hablados",
      Status: "Estado",
      "Release Date": "Publicación",
      Budget: "Presupuesto",
      Revenue: "Ingresos",
      Popularity: "Popularidad",
      Runtime: "Duración",
      Tagline: "Eslogan",
      "Vote Count": "Recuento de votos",
      Seasons: "Temporadas",
      Episodes: "Episodios",
      "Last Air Date": "Última fecha de emisión",
      "Production Companies": "Productoras",
      Crew: "Equipo",
      Recommendations: "Recomendaciones",
      "Watch Trailer": "Ver tráiler",
      Streaming: "En streaming",
      "Results for": "Resultados para",
      "There are no results to show for": "No hay resultados que mostrar para",
      "Media Type": "Tipo ",
      "Directed By": "Dirigida por",
      "Not Found": "No encontrado",
      "Writed By": "Escrita por",
      "Music by": "Música",
      "Cinematography by": "Fotografía",
      "Editing by": "Editado por",
      "Produced by": "Producida por",
      Biography: "Biografía",
      "Known For": "Conocido por",
      "Personal Info": "Información personal",
      "Date of Death": "Fecha de fallecimiento",
      "Place of Birth": "Lugar de nacimiento",
      Gender: "Género",
      "Not set / not specified": "No fijado / no especificado",
      Female: "Mujer",
      Male: "Hombre",
      "Non-binary": "No binario",
      Birthday: "Fecha de nacimiento",
      "show less": "ver menos",
      "read more": "leer más",
      "Top Rated Movies": "Películas mejor valoradas",
      "Popular Movies": "Películas populares",
      "Upcoming Movies": "Próximas películas",
      "Popular Series": "Series populares",
      "On The Air Series": "Series al aire",
      "Top Rated Series": "Series mejor valoradas",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
