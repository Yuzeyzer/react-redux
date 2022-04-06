import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
