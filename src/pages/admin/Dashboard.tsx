import CardStat from "@/components/Dashboard/cardstat";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Card } from "@/components/ui/card";
import AdminLayout from "@/layouts/AdminLayout";
import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AdminLayout>
        <section className=" w-full flex flex-wrap gap-2 justify-between mt-2">
          <div className="flex gap-4 justify-center items-center ">
            <CardStat title="Total keseluruhan Tiket" count={1111}>
              <FaUserAlt />
            </CardStat>
          </div>
          <div className="flex gap-4 justify-center items-center ">
            <CardStat title="Total keseluruhan Tiket" count={1111}>
              <FaUserAlt />
            </CardStat>
          </div>
          <div className="flex gap-4 justify-center items-center ">
            <CardStat title="Total keseluruhan Tiket" count={1111}>
              <FaUserAlt />
            </CardStat>
          </div>
          <div className="flex gap-4 justify-center items-center ">
            <CardStat title="Total keseluruhan Tiket" count={1111}>
              <FaUserAlt />
            </CardStat>
          </div>
        </section>
        <section className="w-full h-96 shadow-md rounded-xl mt-2"></section>
      </AdminLayout>
    </ThemeProvider>
  );
};

export default Dashboard;
