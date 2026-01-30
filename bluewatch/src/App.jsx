import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import LiveStatus from "./pages/LiveStatus.jsx";
import About from "./pages/About.jsx";
import { getSeaStatus } from "./services/seaApi.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [location, setLocation] = useState("Chennai");
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    getSeaStatus(location).then((res) => setData(res));
  }, [location]);

  return (
    <>
      <Navbar
        page={page}
        setPage={setPage}
        location={location}
        setLocation={setLocation}
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        {page === "home" && <Home />}
        {page === "live" && data && (
          <div className="live-wrapper">
            <LiveStatus data={data} />
          </div>
        )}
        {page === "about" && <About />}
      </main>
    </>
  );
}

export default App;
