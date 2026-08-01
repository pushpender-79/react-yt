// routing in react-router-dom v6
// What we have done in folder 17-raect-router-dom and 18-routing-advanced is -:

// feat(react): implement advanced React Router DOM concepts
// - Set up basic dynamic routing and Route configurations
// - Implement nested routing for layout and sub-page architecture
// - Add programatic navigation using the useNavigate hook
// - Create a wildcard (*) custom 'Page Not Found' (404) fallback component
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        {/* dynamic routing */}
        <Route path="/courses/:Course_id" element={<CourseDetail />} />

        {/* nested routing */}
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        {/* page not found component */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
