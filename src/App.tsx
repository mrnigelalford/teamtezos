import { Route, Routes } from 'react-router-dom';
import './App.css';
import BottomNav from './BottomNav/bottomNav';
import InfoBanner from './BottomNav/infoBanner';
import Ecosystem from './Ecosystem/ecosystem';
import { Home } from './Home/Home';
import Navbar from './Nav/Nav';
import Project from './Project/project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ecosystem" element={<Ecosystem />} />
        <Route path="project/:id" element={<Project />} />
      </Routes>
      <InfoBanner />
      <BottomNav />
    </div>
  );
}

export default App;
