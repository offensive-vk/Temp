import { LayoutSingle } from "../../layout/LayoutSingle";
import { Helmet } from "react-helmet-async";

export const About = () => {
    return (
        <>
            <Helmet>
                <title>About - TheExitMoviePlatform</title>
            </Helmet>
            <LayoutSingle>
                <h2 className="border rounded text-3xl p-7 text-center font-mono m-[15rem]">About Section is under construction.</h2>
            </LayoutSingle>
        </>
    );
};