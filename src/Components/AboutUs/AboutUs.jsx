import React, { useEffect, useState } from "react";
import styles from "./../../Components/MainPage.module.css";

export default function AboutUs() {
  return (
    <div>
      <div className={styles.aboutUs}>
        <p>
          {" "}
          Раз в сутки приложение генерирует для вас случайную мотивирующую
          цитату или полезную мысль. Просто нажмите кнопку Get your motivation
          for today. Получить новую цитату можно в 01.00.00 Мск (UTC+3). Иконка
          тг (ссылка на Сейчас.)
        </p>
      </div>
    </div>
  );
}
