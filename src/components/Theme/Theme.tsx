import { ReactNode } from "react";
import { NavBar } from "./Navbar/Index";


type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <>
      <NavBar children={children}></NavBar>
    </>
  );
};