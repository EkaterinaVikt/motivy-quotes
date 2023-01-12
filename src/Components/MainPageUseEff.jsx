import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Alarm from "./Alarm/Alarm";
import styles from "./MainPage.module.css";
import QuoteOfDay from "./QuoteOfDay/QuoteOfDay";

console.log(window.localStorage);
// ВРЕМЕННАЯ ОЧИСТКА ДЛЯ СТИЛЕЙ
// localStorage.clear();
// функция получения рандомного числа
function getRandomNum(max) {
  let num = Math.floor(Math.random() * max);
  return num;
}

function resetLocalStorage() {
  let now = new Date().getHours();
  if (now === 1) {
    console.log(now);
    localStorage.clear();
  }
}
resetLocalStorage();

// кастомный хук для записи данных в localStorage и получения их оттуда при рендеринге страницы
const useLocalStorageListWithData = (key, defaultValue) => {
  const [storageData, setStorageData] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  console.log(storageData);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageData));
  }, [storageData]);

  return [storageData, setStorageData];
};

export default function MainPage(props) {
  const allQuotes = props.store.getState().quotePage.quotes;

  const [data, setData] = useLocalStorageListWithData("data", {
    quote: " ",
    // showQuote: false,
  });
  // const [showQuoteOfDay, setShowQuoteOfDay] = useState(false);

  const [showQuoteOfDay, setShowQuoteOfDay] = useLocalStorageListWithData(
    "showQuote",
    false
  );

  const [modalActive, setModalActive] = useState(false);
  const [showAlarm, setShowAlarm] = useState(false);
  const showAlarmMessage = () => setShowAlarm(true);

  // useEffect(() => {
  //   console.log(`Состояние showQuoteOfDay: ${showQuoteOfDay}`);
  // });

  let getQuote = () => {
    let i = getRandomNum(allQuotes.length);
    setData({
      quote: allQuotes[i],
      // showQuote: true,
    });
    setShowQuoteOfDay([true]);
    // setShowQuoteOfDay(true);

    setTimeout(showAlarmMessage, 10000);
  };

  const showAboutUsModal = () => {
    //функция, которая будет диспатчить нужный экшн в редьюсер модального окна
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.contain}>
          <button
            className={data.quote === " " ? styles.btn : styles.nonbtn}
            onClick={() => {
              getQuote();
            }}
          >
            Get your motivation for today
          </button>
          {/* <QuoteOfDay props={data} /> */}

          {/* <div className={showQuoteOfDay ? styles.quote : styles.nonquote}>
            {data.quote}
          </div> */}
          <div className={showQuoteOfDay ? styles.quote : styles.nonquote}>
            {data.quote}
          </div>
        </div>
        <Alarm showAlarm={showAlarm} />
        <footer onClick={() => setModalActive(true)}>
          <div>
            <span>Что это такое?</span>
          </div>
        </footer>

        <AboutUs active={modalActive} setActive={setModalActive} />
      </div>
    </div>
  );
}
