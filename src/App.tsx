import { lazy, Suspense } from "react";
import "./App.css";
import NavBar from "./components/navigation/navbar";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Hero = lazy(() => import("./components/hero/hero"));
const Loader = lazy(() => import("./components/loader/loader"));
const Score = lazy(() => import("./components/score/score"));
const Summary = lazy(() => import("./components/summary/summary"));
function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Dashboard key="page1" />} path="/" />
          <Route element={<Hero key="page2" />} path="/hero" />
          <Route element={<Score key="page3" />} path="/assessment" />
          <Route element={<Summary key="page4" />} path="/summary" />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
