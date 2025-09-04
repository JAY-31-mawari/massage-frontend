import { AppRoutes } from "./appRoutes";
import ScrollToTop from "./components/scroll-to-top";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";

function App() {

  const path = window.location.pathname

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
