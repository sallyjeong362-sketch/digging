import { Routes, Route } from 'react-router-dom';
import AppShell from './components/AppShell';
import InterestSelectPage from './pages/InterestSelectPage';
import ExplorePage from './pages/ExplorePage';
import TopicPage from './pages/TopicPage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<InterestSelectPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/topic/:nodeId" element={<TopicPage />} />
        <Route path="/map" element={<MapPage />} />
      </Route>
    </Routes>
  );
}

export default App;
