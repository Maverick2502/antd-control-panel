import { useEffect } from "react";

// данный хак предназначен для установки заголовка (если передать строку),
// также возвращает функцию для установки заголовка
function useDocumentTitle(title = "") {
  const setDocTitile = (title) => {
    document.title = title;
  };

  useEffect(() => {
    if (title.length) {
      setDocTitile(title);
    }
  }, [title]);

  return setDocTitile;
}

export { useDocumentTitle };
