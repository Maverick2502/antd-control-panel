import { useDocumentTitle } from "../../hooks";

export function Home() {
  useDocumentTitle("Главная");
  // RENDER
  return "Home";
}
