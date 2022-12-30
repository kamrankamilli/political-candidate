import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import IssuesPage from "./pages/IssuesPage";
import ScrollToTop from "./helpers/ScrollToTop";
import IssueDetailsPage from "./pages/IssuesDetailPage";
import CheckFlexGap from "./helpers/CheckFlexGap";

const App = () => {
  ScrollToTop();
  CheckFlexGap();
  return (
    <Layout>
      <Suspense fallback={<div className="centered">{<LoadingSpinner />}</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/hakkında" element={<AboutPage />}></Route>
          <Route path="/konular" element={<IssuesPage />}></Route>
          <Route path="/konular/:id" element={<IssueDetailsPage />}></Route>
          <Route path="/i̇letisim" element={<ContactPage />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
