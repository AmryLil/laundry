import Navbar from "@/components/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-outfit">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
