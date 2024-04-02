import "@/sharing/styles/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "../pages/shared";
import FolderPage from "../pages/folder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
