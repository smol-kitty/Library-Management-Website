import React, { useEffect, useState } from "react";
import Tags from "../../components/Tags/Tags";
import { useParams } from "react-router-dom";
import Books from "../../components/Books/Books";
import axios from "axios";

export default function TagPage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users");
        setBooks(response.data);
        console.log(books);
      } catch (error) {
        console.error("Error detected: ", error);
      }
    };
    fetchData();
  }, []);
  const { tagId } = useParams();
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    const booksWithTag = books.filter((book) => book.tags.includes(tagId));
    setFilteredBooks(booksWithTag);
  }, [tagId, books]);
  return (
    <>
      <Tags />
      <Books src={filteredBooks} />
    </>
  );
}
