import React from "react";
import styles from "../NotFoundBlock/NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожаление данная старница отсутвует в нашем магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
