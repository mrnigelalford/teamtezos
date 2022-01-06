import { Container } from '@mui/material';
import './App.css';
import BottomNav from './BottomNav/bottomNav';
import InfoBanner from './BottomNav/infoBanner';
import Categories from './Categories/categories';
import Header from './Header/Header';
import Navbar from './Nav/Nav';
import ProjectList from './ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Header />
        <ProjectList title="Promoted Products" CTA="Promote now" />
        <Categories title="Categories" />
        <ProjectList title="Popular Products" />
        <ProjectList title="Recently Added" CTA="Show all" />
        <InfoBanner />
        <BottomNav />
      </Container>
    </div>
  );
}

export default App;
