import Events from "@/features/FamilyFoundation";
import Gallery from "@/features/Gallery";
import Intro from "@/features/Intro";
import News from "@/features/News";

function Home() {
    return (
        <>
            <Intro />
            <Events />
            <News />
            <Gallery />
        </>
    );
}

export default Home;