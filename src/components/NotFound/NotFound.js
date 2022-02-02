import React from "react";
import classes from "./NotFound.module.less";

export function NotFoundView(props) {
  // RENDER
  return (
    <div className={classes["root"]}>
      <h1 className={classes["title"]}>404</h1>
      <div className={classes["description"]}>
        К сожалению, такая страница отсутствует. Возможно, у нас что-то сломалось, или вы просто неверно указали адрес
        страницы.
      </div>
      <button className={classes["goBack-btn"]} onClick={props.goBack}>
        Назад
      </button>
    </div>
  );
}
