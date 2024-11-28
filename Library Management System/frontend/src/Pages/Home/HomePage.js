import React, { useEffect, useState } from "react";
import Tags from "../../components/Tags/Tags";
import Books from "../../components/Books/Books";
import AddBook from "../../components/AddBooks/AddBooks";
import axios from "axios";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksResponse = await axios.get("/api/users");
        setBooks(booksResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Tags />
      <Books src={books} />
      <AddBook />
    </>
  );
}
