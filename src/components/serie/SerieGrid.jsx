import { ItemsGridSeries } from "./ItemsGridSeries";

export const SerieGrid = ({ serieData }) => {
  return (
    <>
      <h1 className="hidden">Find Everything</h1>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-5 pt-0 p-5 animated fadeIn">
        {serieData.map((serie) => {
          return <ItemsGridSeries serie={serie} key={serie.id} />;
        })}
      </div>
    </>
  );
};
