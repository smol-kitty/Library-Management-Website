import React, { useState } from "react";
import classes from "./addBooks.module.css";
import { useNavigate } from "react-router-dom";

export default function AddBooks({ validate }) {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    window.location.pathname === `/addBook`
      ? validate
        ? navigate(`/`)
        : setDisplay(true)
      : navigate(`/addBook`);
  };
  return (
    <div className={classes.container}>
      <div className={classes.button_container}>
        <div className={classes.button} onClick={handleClick}>
          Add Book
        </div>
      </div>
      {display && (
        <div className={classes.error}>* Please fill all fields.</div>
      )}
    </div>
  );
}

AddBooks.defaultProps = {
  validate: true,
};
