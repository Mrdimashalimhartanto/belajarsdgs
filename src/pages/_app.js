import "@/styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <>
      <title>Belajar SDGSs</title>
      <Component {...pageProps} />
    </>
  );
}
