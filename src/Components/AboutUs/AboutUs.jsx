import React, { useEffect, useState } from "react";
import styles from "./../../Components/MainPage.module.css";

export default function AboutUs({ active, setActive, children }) {
  return (
    <div
      // после клика получаю здесь класс, в котором имя modal true
      className={active ? styles.modalActive : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? styles.aboutUsActive : styles.aboutUs}
        onClick={(e) => e.stopPropagation()}
      >
        <p>
          {" "}
          Раз в сутки приложение генерирует для вас случайную мотивирующую
          цитату или полезную мысль. Просто нажмите кнопку Get your motivation
          for today. Получить новую цитату можно в 01.00.00 (UTC+3).
        </p>
      </div>
    </div>
  );
}
