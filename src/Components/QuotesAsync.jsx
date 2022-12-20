import React, { useEffect, useState } from "react";
import styles from "./Quotes.module.css";

console.log(window.localStorage);
// ВРЕМЕННАЯ ОЧИСТКА ДЛЯ СТИЛЕЙ
localStorage.clear();
// функция получения рандомного числа
function getRandomNum(max) {
  let num = Math.floor(Math.random() * max);
  return num;
}

// кастомный хук для записи данных в localStorage и получения их оттуда при рендеринге страницы
const useLocalStorageListWithData = (key, defaultValue) => {
  const [storageData, setStorageData] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageData));
  }, [storageData]);
  console.log(storageData);
  return [storageData, setStorageData];
};

export default function Quotes(props) {
  const allQuotes = props.store.getState().quotePage.quotes;
  // здесь нужно решить вопрос с тем, чтобы записывать всё-таки не массив, а объект. Записать можно только массив. Как записать объект, если Object is not React child?
  const [data, setData] = useLocalStorageListWithData("data", [" ", true]);

  let getQuote = () => {
    let i = getRandomNum(allQuotes.length);
    setData([allQuotes[i], false]);
  };

  function resetLocalStorage() {
    let now = new Date().getHours();
    console.log(now);
    if (now === 1) {
      localStorage.clear();
    }
  }
  resetLocalStorage();

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.contain}>
          <button
            className={data[1] ? styles.btn : styles.nonbtn}
            onClick={() => {
              getQuote();
            }}
          >
            Get your motivation for today
          </button>

          <div className={styles.quote}>{data}</div>
        </div>
      </div>
    </div>
  );
}
