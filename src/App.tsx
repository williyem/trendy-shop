import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "./layout/page-wrapper/page-wrapper";
import Checkout from "./pages/checkout/checkout";
import ProductOverview from "./pages/product-overview/product-overview";
import Products from "./pages/products/products";
import HeroSection from "./pages/storefront/hero-section/hero-section";
import OrderHistory from "./pages/order-history/order-history";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PageWrapper />}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductOverview />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/history" element={<OrderHistory />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
