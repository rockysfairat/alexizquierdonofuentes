import Image from "next/image";
import SiteSections from "@/Components/SiteSections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SiteSections />
    </main>
  );
}