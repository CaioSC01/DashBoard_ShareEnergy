import { AppBar, Box, Button, Toolbar } from "@mui/material";

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Navegadores } from "./Navegadores/Index";

export type NavBarProps = {
  children: React.ReactNode;
};

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <>
      <Box height={"100vh"}>
        <AppBar position="fixed" sx={{ background: "#ffffff" }}>
          <Toolbar>
            <Box flexGrow={1}>
              <AnchorLink>
                <Box display={"flex"} alignItems="center" gap={0.5}>
                  <img src="logo_color.png" width={"150px"} height="54px" />
                </Box>
              </AnchorLink>
            </Box>
            {/* <Navegadores/> */}
            <Box>
              <Button color="inherit">
                <a href="" className="text-[#20A4A3] font-semibold">
                  Lista de Usuarios
                </a>
              </Button>
              <Button color="inherit">
                <a href="" className="text-[#20A4A3] font-semibold">
                  Status
                </a>
              </Button>
              <Button color="inherit">
                <a href="" className="text-[#20A4A3] font-semibold">
                  Botão
                </a>
              </Button>
              <Button color="inherit">
                <a href="" className="text-[#20A4A3] font-semibold">
                  Lista de Clientes
                </a>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
