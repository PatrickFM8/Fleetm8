import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
        <body className="bg-[#f4f1ea] text-gray-900 dark:bg-slate-800 dark:text-slate-100">
          <Main />
          <NextScript />
        </body>
    </Html>
  );
}
