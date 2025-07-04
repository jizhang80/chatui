import Image from "next/image";
import MainPage from "@/components/MainPage";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <MainPage />
    </div>
  );
}
