import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "components/styles";

import { HomePage } from "pages";

const App = () => {
  const { themes, current } = useSelector((state) => state.theme);
  return (
    <>
      <ThemeProvider theme={themes[current] || {}}>
        <GlobalStyles />
        <Routes>
          <Route exact index element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
