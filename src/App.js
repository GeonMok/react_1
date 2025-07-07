import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>HALO</h1>}></Route>
        <Route path="/movie" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
