import React, { useEffect, useState } from "react";
import classes from "./bookPage.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BookPage() {
  const { bookId } = useParams();
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksResponse = await axios.get("/api/users");
        setBooks(booksResponse.data);
      } catch (error) {
        console.error("Error fetching data.", error);
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(bookId);
  if (loading || error) {
    return <div className={classes.container}></div>;
  }

  const book = Array.isArray(books)
    ? books.find((book) => book.id === bookId)
    : null;

  if (!book) return <p>Book not found</p>;
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={book.src} alt="" height={400} />
      </div>
      <div className={classes.details_container}>
        <div className={classes.details}>
          <div className={classes.title}>Book:</div>
          <div className={classes.value}>
            {book.name} ({book.publishYear})
          </div>
        </div>
        <div className={classes.details}>
          <div className={classes.title}>Authors:</div>
          <div className={classes.value}>{book.authors.join(", ")}</div>
        </div>
        {book.series && (
          <div className={classes.details}>
            <div className={classes.title}>Series:</div>
            <div className={classes.value}>{book.series}</div>
          </div>
        )}
        <div className={classes.details}>
          <div className={classes.title}>Publisher:</div>
          <div className={classes.value}>{book.publisher}</div>
        </div>
        <div className={classes.details}>
          <div className={classes.title}>Language:</div>
          <div className={classes.value}>{book.language.join(", ")}</div>
        </div>
        <div className={classes.details}>
          <div className={classes.title}>Genres:</div>
          <div className={classes.value}>{book.tags.join(", ")}</div>
        </div>
      </div>
    </div>
  );
}
