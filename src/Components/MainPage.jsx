import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Alarm from "./Alarm/Alarm";
import styles from "./MainPage.module.css";
import QuoteOfDay from "./QuoteOfDay/QuoteOfDay";

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

export default function MainPage(props) {
  const allQuotes = props.store.getState().quotePage.quotes;
  // здесь нужно решить вопрос с тем, чтобы записывать всё-таки не массив, а объект. Записать можно только массив. Как записать объект, если Object is not React child?
  const [data, setData] = useLocalStorageListWithData("data", [" ", true]);
  const [showQuoteOfDay, setShowQuoteOfDay] = useState(false);

  let getQuote = () => {
    let i = getRandomNum(allQuotes.length);
    setData([allQuotes[i], false]);
    setShowQuoteOfDay(true);
  };

  function resetLocalStorage() {
    let now = new Date().getHours();
    if (now === 1) {
      localStorage.clear();
    }
  }
  resetLocalStorage();

  const showAboutUsModal = () => {
    //функция, которая будет диспатчить нужный экшн в редьюсер модального окна
  };

  const [modalActive, setModalActive] = useState(false);
  const [showAlarm, setShowAlarm] = useState(false);

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
          {/* <QuoteOfDay props={data} /> */}

          <div className={showQuoteOfDay ? styles.quote : styles.nonquote}>
            {data}
          </div>
        </div>

        <footer onClick={() => setModalActive(true)}>
          <span>Что это такое?</span>
        </footer>
        <Alarm showAlarm={showAlarm} />
        <AboutUs active={modalActive} setActive={setModalActive} />
      </div>
    </div>
  );
}
