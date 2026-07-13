import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import InterestSelectPage from './pages/InterestSelectPage';
import ExplorePage from './pages/ExplorePage';
import TopicPage from './pages/TopicPage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<InterestSelectPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/topic/:nodeId" element={<TopicPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
