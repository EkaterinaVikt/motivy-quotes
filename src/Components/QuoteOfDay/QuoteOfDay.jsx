import React from "react";
import styles from "./../../Components/MainPage.module.css";

export default function QuoteOfDay(props) {
  console.log(props);

  return (
    <div>
      <div className={styles.quote}>{props.data}</div>
      <div>{props.data}</div>
    </div>
  );
}
