import React from "react";
import classes from "./books.module.css";
import { useNavigate } from "react-router-dom";

const Books = ({ src }) => {
  const navigate = useNavigate();
  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <div className={classes.container}>
      {src.map((books) => {
        const languageString = books.language.join(", ");
        return (
          <div
            className={classes.book}
            onClick={() => {
              handleBookClick(books.id);
            }}
          >
            <img src={books.src} className={classes.bookImage} alt="" />
            <div>
              {books.name} ({books.publishYear}) ({languageString})
            </div>
            <div>By: {books.authors.join(", ")}</div>
            <div>Available: {books.quantityAvailable}</div>
            <div className={classes.assign}>Assign</div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
