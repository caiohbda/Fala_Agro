import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import EventPage from "./pages/EventPage";
import BusinessPage from "./pages/BusinessPage";
import ProfilePage from "./pages/ProfilePage";
import PostEventPage from "./pages/PostEventPage";
import PostNewsPage from "./pages/PostNewsPage";

import "./index.css";
import PostBusinessPage from "./pages/PostBusinessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/eventos" element={<EventPage />} />
        <Route path="/negocios" element={<BusinessPage />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/publicar-evento" element={<PostEventPage />} />{" "}
        <Route path="/publicar-noticia" element={<PostNewsPage />} />
        <Route path="publicar-negocio" element={<PostBusinessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
