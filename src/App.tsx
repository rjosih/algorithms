import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// Pages
import IndexPage from "./pages/IndexPage";
import NoPage from "./pages/NoPage";
import CreditCard from "./pages/CreditCard";
import CharacterString from "./pages/CharacterString";
import NumberArray from "./pages/NumberArray";

// Components 
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="creditcard" element={<CreditCard />} />
            <Route path="string" element={<CharacterString />} />
            <Route path="numbers" element={<NumberArray />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
