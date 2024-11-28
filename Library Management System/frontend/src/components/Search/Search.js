import React, { useState } from "react";
import classes from "./search.module.css";

export default function Search() {
  return (
    <div className={classes.search}>
      <input type="text" className={classes.input} />
      <img src="/Icons/icons8-search-50.png" alt="" width={20} />
    </div>
  );
}
