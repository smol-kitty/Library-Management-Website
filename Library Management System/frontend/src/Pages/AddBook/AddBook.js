import React, { useState } from "react";
import classes from "./addBook.module.css";
import AddBooks from "../../components/AddBooks/AddBooks";

export default function AddBook() {
  const fields = ["name", "series", "publisher"];
  const num_fields = [
    ["publishYear", 7],
    ["quantityAvailable", 8],
  ];
  const mul_fields = ["authors", "tags"];
  const [formData, setFormData] = useState({
    name: "",
    authors: [],
    series: "",
    publisher: "",
    publishYear: "",
    quantityAvailable: "",
    tags: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      setComplete(validation(updatedData));
      return updatedData;
    });
  };
  const [complete, setComplete] = useState(false);
  const validation = (data) => {
    return (
      data.name &&
      data.authors &&
      data.publishYear &&
      data.publisher &&
      data.quantityAvailable &&
      data.series &&
      data.tags
    );
  };
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const str_split = (string, index) => {
    return string.slice(0, index) + " " + string.slice(index);
  };
  return (
    <>
      <div className={classes.container}>
        <form>
          {fields.map((field) => (
            <div className={classes.input_type}>
              <div className={classes.field}>{capitalize(field)}:</div>
              <div className={classes.input}>
                <input
                  type="text"
                  required
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
          {num_fields.map((field) => (
            <div className={classes.input_type}>
              <div className={classes.field}>
                {str_split(capitalize(field[0]), field[1])}:
              </div>
              <div className={classes.input}>
                <input
                  type="text"
                  required
                  name={field[0]}
                  value={formData[field[0]]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
          {mul_fields.map((field) => (
            <div className={classes.input_type}>
              <div className={classes.field}>{capitalize(field)}:</div>
              <div className={classes.input}>
                <input
                  type="text"
                  required
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
        </form>
      </div>
      <AddBooks validate={complete} />
    </>
  );
}
