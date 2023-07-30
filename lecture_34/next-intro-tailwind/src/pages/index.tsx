import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-row justify-center items-center w-20 h-20 bg-red-100 text-center border-2 border-black">
        <p>1</p>
      </div>
      <div className="flex flex-row justify-center items-center w-20 h-20 bg-red-100 text-center border-2 border-black">
        <p>2</p>
      </div>
      <div className="flex flex-row justify-center items-center w-20 h-20 bg-red-100 text-center border-2 border-black">
        <p>3</p>
      </div>
    </div>
  );
}
