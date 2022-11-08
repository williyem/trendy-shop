import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "./layout/page-wrapper/page-wrapper";
import HeroSection from "./pages/storefront/hero-section";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PageWrapper />}>
            <Route path="/" element={<HeroSection />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
