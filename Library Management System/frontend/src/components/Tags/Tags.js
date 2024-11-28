import React, { useEffect, useState } from "react";
import classes from "./tags.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Tags() {
  const [uniqueTags, setUniqueTags] = useState([]);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users");
        setBooks(response.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const allTags = books.flatMap((book) => book.tags);
    const uniqueTagsArray = Array.from(new Set(allTags));
    setUniqueTags(uniqueTagsArray);
  }, [books]);
  const handleTagClick = (tag) => {
    navigate(`/tag/${tag}`);
  };

  return (
    <div className={classes.container}>
      {uniqueTags.map((tag) => (
        <div className={classes.tag} onClick={() => handleTagClick(tag)}>
          {tag}
        </div>
      ))}
    </div>
  );
}
