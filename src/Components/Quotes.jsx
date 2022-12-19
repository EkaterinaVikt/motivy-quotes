import React, { useState } from "react";
import styles from "./Quotes.module.css";

// функция получения рандомного числа
function getRandomNum(max) {
  let num = Math.floor(Math.random() * max);
  return num;
}

// функция записи данных в localStorage
function setLocalStorage(quote, btnState) {
  localStorage.setItem("quoteOfDay", quote);
  localStorage.setItem("btnState", btnState);
}

export default function Quotes(props) {
  const [quote, setQuotes] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const allQuotes = props.store.getState().quotePage.quotes;

  // localStorage.clear();

  // при нажатии на кнопку меняем state у quote и button. Возможно, эта функция должна стать промисом???
  let getQuote = () => {
    let i = getRandomNum(allQuotes.length);
    setQuotes(allQuotes[i]);
    setButtonState(false);
    return quote;
  };

  // внутри функции qetQuote это не работает. Снаружи -- работает.
  // Наверное, это нужно записать через промис. То есть эта функция вызывается не при каждом обновлении страницы, а только после того, как срабаытвает функция qetQuote.
  setLocalStorage(quote, buttonState);
  console.log(localStorage);

  // const getQuoteAndButtonFromStorage = () => {
  //   quoteOfDay = localStorage.getItem("quoteOfDay");
  //   btnState = localStorage.getItem("btnState");
  //   return { quoteOfDay, btnState };
  // };

  return (
    <div>
      <div className={styles.main}>
        <button
          className={buttonState ? styles.btn : styles.nonbtn}
          onClick={getQuote}
        >
          Get your motivation for today
        </button>
        <div className={styles.quote}>{quote}</div>
      </div>
    </div>
  );
}
