import { useEffect, useCallback } from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound  from "./pages/NotFound";
import Layout from "./components/Layout.js";
import QuoteDetails from "./pages/QuoteDetails";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetails />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
    
  );
}

export default App;
