import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/molecule/HomePage";
import EditSectionPage from "./components/molecule/EditSectionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:type" element={<EditSectionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
