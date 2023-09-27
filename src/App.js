import "./App.css";
import MoviesList from "./MoviesList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieInfo from "./MovieInfo";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movieDetails" element={<MovieInfo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
