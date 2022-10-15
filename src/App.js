import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import ChartCoins from "./components/ChartCoins/ChartCoins";
import { store } from "./components/CoinsData/Store";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <div className="w-screen flex items-center justify-start flex-col h-auto">
      <Provider store={store}>
        <Routes>
          <Route path="/chart-coins/:id" element={<ChartCoins />} />
          <Route path="/" element={<Layout />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
