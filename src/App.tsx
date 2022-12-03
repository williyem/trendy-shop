import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "./layout/page-wrapper/page-wrapper";
import Checkout from "./pages/checkout/checkout";
import ProductOverview from "./pages/product-overview/product-overview";
import Products from "./pages/products/products";
import HeroSection from "./pages/storefront/hero-section/hero-section";
import OrderHistory from "./pages/order-history/order-history";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import StoreFront from "./pages/storefront/store-front";
import AdminWrapper from "./layout/admin-wrapper/admin-wrapper";
import AdminDashboardComponent from "./pages/admin/admin-dashboard/admin-dashboard";
import AdminOrdersComponent from "./pages/admin/admin-orders/admin-orders";
import AdminProductsComponent from "./pages/admin/admin-products/admin-products";
import Login from "./pages/login/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PageWrapper />}>
            <Route path="/" element={<StoreFront />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductOverview />} />
            <Route path="/" element={<HeroSection />} />
            <Route path="/products/:categoryName" element={<Products />} />
            <Route path="/product" element={<ProductOverview />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/history" element={<OrderHistory />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/admin" element={<AdminWrapper />}>
            <Route index element={<AdminDashboardComponent />} />
            <Route path="orders" element={<AdminOrdersComponent />} />
            <Route path="products" element={<AdminProductsComponent />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
