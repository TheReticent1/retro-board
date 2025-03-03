import { lazy, Suspense } from "react";
import "./App.css";
import NavBar from "./components/navigation/navbar";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./components/dashboard/dashboard"));
const Hero = lazy(() => import("./components/hero/hero"));
const Loader = lazy(() => import("./components/loader/loader"));
function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Dashboard key="page1" />} path="/" />
          <Route element={<Hero key="page2" />} path="/hero" />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
