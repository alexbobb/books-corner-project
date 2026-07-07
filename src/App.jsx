
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview.jsx'
import ReadingList from "./pages/ReadingList.jsx";
import ReadingStats from "./pages/ReadingStats.jsx";

function App() {
  return (
    <>

  <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/readinglist" element={<ReadingList />} />
          <Route path="/readingstats" element={<ReadingStats />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;