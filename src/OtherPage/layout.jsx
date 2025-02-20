import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { Providers } from "./providers";
import { Helmet } from "react-helmet";
import "node_modules/react-modal-video/css/modal-video.css";
import "./styles/index.css";

const RootLayout = ({ children }) => {
  return (
    <Router>
      <Helmet>
        <html lang="en" />
        {/* Add any meta tags or other head elements here */}
      </Helmet>
      <div className="bg-[#FCFCFC] dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </div>
    </Router>
  );
};

export default RootLayout;
