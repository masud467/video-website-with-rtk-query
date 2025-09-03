import { BrowserRouter, Route, Router, Routes } from "react-router";
import Home from "./components/pages/Home";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Video from "./components/pages/Video";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
        <Route path="/videos/add" element={<Add />} />
        <Route path="/videos/edit/:videoId" element={<Edit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
