import { AppRoutes } from "./appRoutes";
import ScrollToTop from "./components/scroll-to-top";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation()
  const path = location.pathname

  return (
    <>
      {path !== "/create-account" && <Navbar />}
      <ScrollToTop />
      <main>
        <AppRoutes />
      </main>
      {path !== "/create-account" && <Footer />}
    </>
  );
}

export default App;
