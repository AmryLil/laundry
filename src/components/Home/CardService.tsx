import React from "react";
import { Interface } from "readline";

interface CardServiceProps {
  title: string;
  description: string;
  image: string;
  isRight: boolean;
}

const CardService: React.FC<CardServiceProps> = ({
  title,
  description,
  image,
  isRight = true,
}) => {
  return (
    <div className="flex gap-3 justify-center items-center">
      <div className="justify-center items-center">
        <h1 className="font-semibold text-xl">{title}</h1>
        <h3 className="font-light">{description}</h3>
      </div>
      <div
        className={`rounded-full border-2 border-cyan-700  overflow-hidden object-cover h-20 w-28 ${
          isRight ? "" : "order-first"
        }`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default CardService;
