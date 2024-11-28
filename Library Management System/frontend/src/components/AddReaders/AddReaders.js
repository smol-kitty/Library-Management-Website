import React, { useEffect, useState } from "react";
import classes from "./addReaders.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import axios from "axios";

export default function AddReaders() {
  const [founding_date, setFoundingDate] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users/foundingDate");
        setFoundingDate(new Date(response.data));
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, []);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filled, setFilled] = useState(false);
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
    setFilled(e.target.value.trim() !== "");
  };
  const [dateError, setDateError] = useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date > today || date < founding_date) {
      setDateError(true);
    } else {
      setDateError(false);
    }
  };
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    if (display) {
      if (filled && !dateError) {
        setDisplay(false);
        setName("");
        setFilled(false);
        setSelectedDate(today);
      }
    } else {
      setDisplay(true);
    }
  };
  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB");
  };
  return (
    <div className={classes.container}>
      <div className={classes.button_container}>
        <div className={classes.button} onClick={handleClick}>
          Add Reader
        </div>
      </div>
      {display && (
        <form className={classes.form}>
          <div className={classes.elements}>
            <div className={classes.element_name}>Name:</div>
            <div className={classes.element}>
              <input value={name} onChange={handleNameChange} />
            </div>
          </div>
          <div className={classes.elements}>
            <div className={classes.element_name}>Joining Date:</div>
            <div className={classes.element}>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => handleDateChange(date)}
                dateFormat="dd/MM/yyyy"
              />
              {dateError && (
                <div className={classes.error}>
                  * Select a valid date between founding (
                  {formatDate(founding_date)}) and today ({formatDate(today)}).
                </div>
              )}
            </div>
          </div>
        </form>
      )}
      {display && !filled && (
        <div className={classes.error}>*Please fill all fields</div>
      )}
    </div>
  );
}
