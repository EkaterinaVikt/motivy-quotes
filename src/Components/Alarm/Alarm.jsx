import React from "react";
import styles from "./../MainPage.module.css";

export default function Alarm({ showAlarm }) {
  return (
    <div className={showAlarm ? styles.showAlarm : styles.nonShowAlarm}>
      Свежая мысль появится завтра. А сейчас пора за работу!:)
    </div>
  );
}
