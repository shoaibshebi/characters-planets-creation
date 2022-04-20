import { Routes, Route } from "react-router-dom";

import Planets from "./pages/Planets/Index";
import Characters from "./pages/Characters/Index";
import SpaciousLayout from "./SpaciousLayout/Index.jsx";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <SpaciousLayout>
      <Routes>
        {["/", "/planets", "/planets/create"].map((path, i) => (
          <Route key={i + path} path={path} element={<Planets />} />
        ))}
        {["/characters", "/characters/create"].map((path, i) => (
          <Route key={i + path} path={path} element={<Characters />} />
        ))}
        {/* If no route exsts */}
        <Route
          path="*"
          element={<NotFound text="It seems like you are lost in the space." />}
        />
      </Routes>
    </SpaciousLayout>
  );
}

export default App;
