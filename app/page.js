import Background from "@/components/Background";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Background />
      <div className="h-[2000px]"></div>
    </div>
  );
}
