import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BottomNav from './BottomNav/bottomNav';
import InfoBanner from './BottomNav/infoBanner';
import Categories from './Categories/categories';
import Ecosystem from './Ecosystem/ecosystem';
import Header from './Header/Header';
import Navbar from './Nav/Nav';
import ProjectList from './ProjectList/ProjectList';

const Home = () => (
  <Container>
    <Header />
    <ProjectList title="Promoted Products" CTA="Promote now" />
    <Categories title="Categories" />
    <ProjectList title="Popular Products" />
    <ProjectList title="Recently Added" CTA="Show all" />
    <InfoBanner />
    <BottomNav />
  </Container>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ecosystem" element={<Ecosystem />} />
      </Routes>
    </div>
  );
}

export default App;
