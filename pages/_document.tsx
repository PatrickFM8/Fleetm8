import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { useNavitems } from "@/hooks/useNavitems";
import { Html, Head, Main, NextScript } from "next/document";

export default  function Document() {
  const navitems =  useNavitems();
  console.log('hello', navitems)
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#f4f1ea] text-gray-900 dark:bg-slate-800 dark:text-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
