import React from "react";

interface MyNavbarProps {
  path: string;
  children: React.ReactNode;
}

const ItemNav: React.FC<MyNavbarProps> = ({ path, children }) => {
  return (
    <li>
      <a
        href={path}
        className="block py-2 px-3  rounded-sm md:bg-transparent md:p-0 text-slate-950 dark:text-cyan-50"
      >
        {children}
      </a>
    </li>
  );
};

export default ItemNav;
