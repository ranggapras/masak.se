import Layout from "./Components/Layouts";
import Home from "./Pages/Home/Home";
import Bookmark from "./Pages/Bookmark/Bookmark";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Recipe from "./Pages/Recipe/Recipe";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/bookmark" exact element={<Bookmark />} />
          <Route path="/recipe/:id" exact element={<Recipe />} />
          <Route path="/profile" exact element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
