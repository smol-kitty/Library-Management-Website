import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import BookPage from "./Pages/Book/BookPage";
import TagPage from "./Pages/Tag/TagPage";
import Readers from "./Pages/Readers/Readers";
import AddBook from "./Pages/AddBook/AddBook";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book/:bookId" element={<BookPage />} />
      <Route path="/tag/:tagId" element={<TagPage />} />
      <Route path="/readers" element={<Readers />} />
      <Route path="/addBook" element={<AddBook />} />
    </Routes>
  );
}
