import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { BlogPage, HomePage, NotesPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container mx-auto mt-5 flex justify-center">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
