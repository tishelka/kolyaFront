import { SignInPage } from "./pages/SignInPage";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import { PostCreatePage } from "./pages/PostCreatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="create" element={<PostCreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
