import React from "react";

export default function Alarm({ showAlarm }) {
  return (
    <div>
      <div className={showAlarm ? styles.showAlarm : styles.nonShowAlarm}>
        Свежая мысль появится завтра. А сейчас пора за работу!:)
      </div>
    </div>
  );
}
