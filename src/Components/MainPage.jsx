import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Alarm from "./Alarm/Alarm";
import styles from "./MainPage.module.css";

// console.log(window.localStorage);

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

  return [storageData, setStorageData];
};

export default function MainPage(props) {
  const allQuotes = props.store.getState().quotePage.quotes;

  const [data, setData] = useLocalStorageListWithData("data", {
    quote: " ",
  });
  const [showQuoteOfDay, setShowQuoteOfDay] = useLocalStorageListWithData(
    "showQuote",
    false
  );
  const [dateOfGettingQuote, setDateOfGettingQuote] =
    useLocalStorageListWithData("date", 0);

  const [modalActive, setModalActive] = useState(false);
  const [showAlarm, setShowAlarm] = useState(false);
  const showAlarmMessage = () => setShowAlarm(true);

  let getQuote = () => {
    let i = getRandomNum(allQuotes.length);
    setData({
      quote: allQuotes[i],
    });
    setShowQuoteOfDay([true]);

    let timeOfGetQuote = new Date().getDate();

    setDateOfGettingQuote(timeOfGetQuote);
  };

  if (showQuoteOfDay) setTimeout(showAlarmMessage, 10000);

  function resetLocalStorage() {
    let now = new Date().getDate();

    if (now > dateOfGettingQuote) {
      localStorage.clear();
    }
  }
  resetLocalStorage();

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
