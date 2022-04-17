import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Planets from "./pages/Planets/Index";
import Characters from "./pages/Characters/Index";
import SpaciousLayout from "./SpaciousLayout/Index.jsx";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Box className="App">
      <SpaciousLayout>
        <Routes>
          <Route path="/" element={<Planets />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters" element={<Characters />} />
          {/* If no route exsts */}
          <Route
            path="*"
            element={
              <NotFound text="It seems like you are lost in the space." />
            }
          />
        </Routes>
      </SpaciousLayout>
    </Box>
  );
}

export default App;
