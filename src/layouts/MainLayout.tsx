import Navbar from "@/components/navbar";
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
