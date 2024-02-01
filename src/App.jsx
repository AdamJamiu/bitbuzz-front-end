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
        <Route element={<SignInPage />} path="/auth/login" />
        <Route element={<SignUpPage />} path="/auth/signup" />
        <Route element={<DashboardLayout />} path="">
          <Route index element={<Home />} path="/" />
          <Route index element={<GalleryPage />} path="gallery" />
          <Route element={<PoolsPage />} path="pools" />
          <Route element={<PoolsPage />} path="reel" />
          <Route element={<PoolsPage />} path="upload" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;