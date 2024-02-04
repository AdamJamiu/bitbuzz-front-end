import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./pages/Home";
import PoolsPage from "./pages/Pools";
import GalleryPage from "./pages/Gallery";
import ReelPage from "./pages/Reels";
import "./App.css"
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SignInPage />} path="/auth/login" />
        <Route element={<SignUpPage />} path="/auth/signup" />
        <Route element={<DashboardLayout />} path="">
          <Route index element={<Home />} path="/" />
          <Route index element={<VideoPlayer />} path="/:id" />
          <Route index element={<GalleryPage />} path="gallery" />
          <Route element={<PoolsPage />} path="pools" />
          <Route element={<ReelPage />} path="reel" />
          <Route element={<PoolsPage />} path="upload" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;