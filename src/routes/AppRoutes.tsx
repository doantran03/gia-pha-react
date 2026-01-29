import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home';
import About from '@/pages/About';
import News from '@/pages/News';
import NewsDetail from '@/pages/NewsDetail';
import Contact from '@/pages/Contact';
import Genealogy from "@/pages/Genealogy";
import ClanPact from "@/pages/ClanPact";
import Events from "@/pages/Events";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gioi-thieu" element={<About />} />
      <Route path="/tin-tuc" element={<News />} />
      <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
      <Route path="/lien-he" element={<Contact />} />
      <Route path="/pha-do" element={<Genealogy />} />
      <Route path="/su-kien" element={<Events />} />
      <Route path="/toc-uoc" element={<ClanPact />} />
    </Routes>
  )
}
 export default AppRoutes;