import Layout from "./Components/Layouts";
import Home from "./Pages/Home/Home";
import Bookmark from "./Pages/Bookmark/Bookmark";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./Pages/Recipe/Recipe";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/bookmark" exact element={<Bookmark />} />
          <Route path="/recipe/:id" exact element={<Recipe />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
