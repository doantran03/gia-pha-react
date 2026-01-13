import Events from "@/features/home/Events";
import Gallery from "@/features/home/Gallery";
import Intro from "@/features/home/Intro";
import News from "@/features/home/News";

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