import React, { useEffect, useState } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [display, setDisplay] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/users/name");
        setUser(response.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    getData();
  });
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Link className={classes.title} to={`/`}>
          {user}'s Library
        </Link>
        <Link
          to={`/profile`}
          className={classes.login}
          onMouseEnter={() => setDisplay(true)}
        >
          {user}
        </Link>
      </div>
      {display && (
        <div className={classes.options} onMouseLeave={() => setDisplay(false)}>
          <Link className={classes.option} to={`/readers`}>
            Readers
          </Link>
          <div className={classes.option}>Logout</div>
        </div>
      )}
    </div>
  );
}
