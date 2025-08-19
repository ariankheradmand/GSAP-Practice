import Background from "@/components/Background";
import Loading from "@/components/Loading";
import NavBar from "@/components/NavBar";
import NextIcon from "@/components/NextIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Background />
      <NextIcon />
      <Loading />
      <div className="h-[2000px]"></div>
    </div>
  );
}
