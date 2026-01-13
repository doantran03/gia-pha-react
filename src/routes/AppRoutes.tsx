import { Route, Routes } from "react-router-dom";
import Home from '@/pages/Home';
import About from '@/pages/About';
import News from '@/pages/News';
import NewsDetail from '@/pages/NewsDetail';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gioi-thieu" element={<About />} />
      <Route path="/tin-tuc" element={<News />} />
      <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
      <Route path="/thu-vien-anh" element={<Gallery />} />
      <Route path="/lien-he" element={<Contact />} />
    </Routes>
  )
}
 export default AppRoutes;