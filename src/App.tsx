import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './features/layout';
import SideBar from './components/SideBar';
import WelcomePage from './pages/welcome_page/WelcomePage';
import MainEditor from "./pages/main_editor/MainEditor";

const App: React.FC = () => {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/MainEditor" element={<MainEditor />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App
