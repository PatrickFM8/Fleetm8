import Image from "next/image";
import { Inter } from "next/font/google";
import Client from "@/components/Client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Client>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      test
      </main>
      </Client>
  );
}
