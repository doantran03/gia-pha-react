import Events from "@/features/home/Events";
import Gallery from "@/features/home/Gallery";
import Hero from "@/features/home/Hero";
import Intro from "@/features/home/Intro";
import News from "@/features/home/News";

function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <Events />
            <News />
            <Gallery />
        </>
    );
}

export default Home;