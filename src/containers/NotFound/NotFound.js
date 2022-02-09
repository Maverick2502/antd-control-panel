import { Button, Result } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";

export function NotFound() {
  useDocumentTitle("Страница не найдена :(");
  const { goBack } = useHistory();

  // RENDER
  return (
    <Result
      status="404"
      title="404"
      subTitle="К сожалению, такая страница отсутствует. Возможно, у нас что-то сломалось, или вы просто неверно указали адрес
        страницы."
      extra={
        <Button type="primary" onClick={goBack}>
          Назад
        </Button>
      }
    />
  );
}
