import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HeroSection } from "./components/HeroSection/HeroSection";
import { Suspense } from "react";
import { Layout } from "./layout";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/schemazendb"
            element={
              <Layout>
                <HeroSection />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
