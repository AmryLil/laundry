import { ModeToggle } from "@/components/mode-toggle";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { FaBell } from "react-icons/fa";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="font-outfit text-slate-50 p-2.5 md:pl-0 w-full">
        <header className="bg-cyan-800 w-full py-2 flex justify-between px-4 rounded-md">
          <SidebarTrigger />
          <div className="flex gap-2 items-center">
            <ModeToggle />
            <FaBell />
          </div>
        </header>
        <main className=" dark:bg-slate-950 p-1 w-full text-slate-950 dark:text-slate-50">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
