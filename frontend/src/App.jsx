import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Default from "./Layout/DefaultLayout/Default";
import HomePage from "./page/home/HomePage";
import PageNoFound from "./page/Page-not-found/PageNoFound";
import AboutPage from "./page/about/AboutPage";
import ProductPage from "./page/products/ProductPage";
import PricingPage from "./page/pricing/PricingPage";
import SupportPage from "./page/support/SupportPage"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route element={<Default />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/price" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<PageNoFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
