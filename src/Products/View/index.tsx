import { useCallback, useState } from "react";
import Navbar from "./Components/Navbar";
import ProductsPage from "./Components/ProductsPage";

export default function Index() {
  const [lang, setLang] = useState("ar");
  const changeLang = useCallback((lang: string) => setLang(lang), []);
  return (
    <>
      <Navbar changeLang={changeLang} lang={lang} />
      <ProductsPage lang={lang} />
    </>
  );
}
