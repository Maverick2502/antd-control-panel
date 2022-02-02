import React from "react";
import { useHistory } from "react-router-dom";
import { NotFoundView } from "../../components/NotFound";
import { useDocumentTitle } from "../../hooks";

export function NotFound() {
  useDocumentTitle("Страница не найдена :(");
  const { goBack } = useHistory();

  // RENDER
  return <NotFoundView goBack={goBack} />;
}
