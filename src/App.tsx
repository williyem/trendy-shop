import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "./layout/page-wrapper/page-wrapper";
import Products from "./pages/products/products";
import HeroSection from "./pages/storefront/hero-section/hero-section";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PageWrapper />}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
