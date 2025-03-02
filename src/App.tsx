import { lazy, Suspense } from "react";
import "./App.css";
import NavBar from "./components/navigation/navbar";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./components/Dashboard/dashboard"));
const Hero = lazy(() => import("./components/hero/hero"));
function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Hero />} path="/hero" />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
