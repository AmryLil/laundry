import React, { ReactNode } from "react";

interface TicketCardProps {
  title: string;
  count: number;
  children: React.ReactNode;
}

const CardStat: React.FC<TicketCardProps> = ({ title, count, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4  flex  items-center text-center border gap-2 justify-center border-slate-500">
      <div className="bg-green-100 rounded-full text-4xl ">{children}</div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-gray-500 mt-2">{title}</h3>
        <p className=" text-2xl font-bold text-gray-900 text-start">{count}</p>
      </div>
    </div>
  );
};

export default CardStat;
