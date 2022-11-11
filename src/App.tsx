import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { BlogPage, HomePage, NotesPage, NotFoundPage } from "./pages";

function App() {
  return (
    <HashRouter>
      {/* <Nav /> */}
      <div className="container mx-auto pt-20 lg:px-52">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
