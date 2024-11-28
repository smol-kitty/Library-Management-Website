import React, { useEffect, useState } from "react";
import classes from "./readers.module.css";
import AddReaders from "../../components/AddReaders/AddReaders";
import axios from "axios";

export default function Readers() {
  const [readers, setReaders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users/readers");
        setReaders(response.data);
      } catch (error) {
        console.error("Error loading data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.reader_container}>
        {readers.map(
          (reader) =>
            reader.active && (
              <div className={classes.reader}>
                <div className={classes.name}>
                  {reader.name} ({reader.id})
                </div>
                <div className={classes.reader_elements}>
                  <div>Books Pending: {reader.booksPending}</div>
                  <div>Total Books Borrowed: {reader.booksBorrowed}</div>
                </div>
              </div>
            )
        )}
      </div>
      <AddReaders />
    </div>
  );
}
