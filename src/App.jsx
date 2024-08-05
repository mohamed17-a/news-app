import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Sports from "./Components/pages/Sports";
import Navbar from "./Components/shared/Navbar";
import Footer from "./Components/shared/Footer";
import NotFound from "./Components/NotFound/NotFound";
import EntryPage from "./Components/EntryPage/EntryPage";
import UnAuthorized from "./Components/shared/UnAuthorized";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route
            path="/home/:id"
            element={<ProtectedRoute element={<Home />} />}
          />{" "}
          <Route
            path="/sports/:id"
            element={<ProtectedRoute element={<Sports />} />}
          />
          <Route path="/unAuthorized" element={<UnAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
