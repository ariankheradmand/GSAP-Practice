import Background from "@/components/Background";
import NavBar from "@/components/NavBar";
import NextIcon from "@/components/NextIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Background />
      <NextIcon />
      <div className="h-[2000px]"></div>
    </div>
  );
}
