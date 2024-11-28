import { ScrollSpySidebar } from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggler";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="relative  w-full">
        <ThemeToggle />

        <ScrollSpySidebar />

        <main>Kiya Kebe</main>
      </div>
    </SidebarProvider>
  );
}
