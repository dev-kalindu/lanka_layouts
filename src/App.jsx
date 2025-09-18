import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Home/index";
import AppLayout from "./Layouts/AppLayout";
// sd
import "./assets/CSS/App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
