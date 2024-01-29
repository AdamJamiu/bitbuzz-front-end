import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/Home";
import PoolsPage from "./pages/Pools";
import GalleryPage from "./pages/Gallery";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SignInPage />} path="/" />
        <Route element={<SignUpPage />} path="/signup" />
        <Route element={<DashboardLayout />} path="/dashboard">
          <Route index element={<Home />} path="home" />
          <Route index element={<GalleryPage />} path="gallery" />
          <Route element={<PoolsPage />} path="pools" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;