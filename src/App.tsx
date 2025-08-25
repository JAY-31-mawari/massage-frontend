import { AppRoutes } from "./appRoutes";
import ScrollToTop from "./components/scroll-to-top";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
