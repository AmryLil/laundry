import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import AdminLayout from "@/layouts/AdminLayout";
import React from "react";

const Dashboard = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AdminLayout>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis
          quidem tempore. Expedita magni omnis enim tempora beatae nihil dolorem
          delectus quam voluptas quisquam doloremque illum totam cupiditate,
          dicta voluptates!
        </div>
      </AdminLayout>
    </ThemeProvider>
  );
};

export default Dashboard;
