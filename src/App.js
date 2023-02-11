import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Feed } from "./pages/Feed";
import { Profile } from "./pages/Profile";
import { Post } from "./pages/Post";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="feed" element={<Feed />} />
        <Route path="feed/:slug" element={<Post />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
