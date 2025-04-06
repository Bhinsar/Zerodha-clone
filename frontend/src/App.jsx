import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Default from "./Layout/DefaultLayout/Default";
import HomePage from "./page/home/HomePage";
import PageNoFound from "./page/Page-not-found/PageNoFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route element={<Default />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<PageNoFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
