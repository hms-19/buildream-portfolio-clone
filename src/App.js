import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import Router from "./routes";

function App() {

  const location = useLocation()

  return (
    <>
      <AnimatePresence>
        <Router key={location.pathname} />
      </AnimatePresence>
    </>
  );
}

export default App;
