import { Sidebar } from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggler";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <ThemeToggle />
      <main>Kiya Kebe</main>
    </div>
  );
}
