import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from "react-router-dom";
import Home from "./pages/Home";
import Mobile from "./pages/Mobile";
import Large from "./pages/Large";
import sandbox from "sandbox";
import { useEffect, useState } from "react";
import { debounce } from 'lodash';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [main, setMain] = useState(null);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    const onResize = debounce(() => {
      if (window.innerWidth < 1300) {
        setMain(<Mobile />);
      } else if (window.innerWidth > 1980) {
        setMain(<Large />);
      } else {
        setMain(<Home />);
      }
    }, 300);

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={main} />
      <sandbox />
    </Routes>
  );
}
export default App;
