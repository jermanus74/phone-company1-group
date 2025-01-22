import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Blogs } from "./pages/Blogs";
import { About } from "./pages/About";
function App() {
  return (
    <div className="custom-container dark:bg-gray-700 dark:text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
