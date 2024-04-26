import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sigin, Sigup } from "./pages";
// import { Toast, ToastProvider } from "./components/ui/toast";
import HomePage from "./pages/home/Home.page";

const App = () => {
  return (
    <div className=" w-full mx-auto h-screen bg-gray-300">
      {/* <ToastProvider> */}
        {/* <Toast /> */}
        <Routes>
          <Route path="/" element={<Sigin />} />
          <Route path="/signup" element={<Sigup />} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      {/* </ToastProvider> */}
    </div>
  );
};

export default App;