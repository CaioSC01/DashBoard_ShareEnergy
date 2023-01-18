import { Close, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  Hidden,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions/transition";

import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

export type NavBarProps = {
  children: React.ReactNode;
};

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="left" ref={ref} {...props} />;
  }
);

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const onOpenHandle = () => setOpen(true);
  const onCloseHandle = () => setOpen(false);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box height={"100vh"}>
        <AppBar position="fixed" sx={{ background: "#ffffff" }}>
          <Toolbar>
            <Box flexGrow={1}>
              <AnchorLink>
                {/* Logo do dashboard */}
                <Box display={"flex"} alignItems="center" gap={0.5}>
                  <img src="logo_color.png" width={"150px"} height="54px" />
                </Box>
              </AnchorLink>
            </Box>
            {/* Aqui é aonde Introduzo os navegadores */}
            <Hidden smDown>
              <Box>
                <Button color="inherit" fullWidth={isSmall}>
                  <Link to="/listausuario">
                    <div className="text-[#20A4A3] font-semibold">
                      Lista de Usuarios
                    </div>
                  </Link>
                </Button>
                <Button color="inherit" fullWidth={isSmall}>
                  <Link to="/status">
                    <div className="text-[#20A4A3] font-semibold ml-3">
                      Status
                    </div>
                  </Link>
                </Button>
                <Button color="inherit" fullWidth={isSmall}>
                  <Link to="/random">
                    <div className="text-[#20A4A3] font-semibold ml-3">
                      Random Dog
                    </div>
                  </Link>
                </Button>
                <Button color="inherit" fullWidth={isSmall}>
                  <Link to="/listaclientes">
                    <div className="text-[#20A4A3] font-semibold ml-3">
                      Lista de Clientes
                    </div>
                  </Link>
                </Button>
              </Box>
            </Hidden>
            {/* Aqui é onde faço a reponsividade  */}
            <Hidden smUp>
              <IconButton onClick={onOpenHandle}>
                <Menu className="text-[#20A4A3] " />
              </IconButton>
              <Dialog
                open={open}
                fullScreen
                fullWidth
                TransitionComponent={Transition}
                hideBackdrop
                PaperProps={{
                  sx: {
                    boxShadow: "none",
                  },
                }}
              >
                <AppBar
                  position="static"
                  sx={{ background: "white", color: "text.primary" }}
                >
                  <Toolbar>
                    <Typography
                      variant="inherit"
                      sx={{ flexGrow: 1 }}
                      className="text-[#20A4A3] font-bold text-xl "
                    >
                      Menu
                    </Typography>
                    <IconButton onClick={onCloseHandle}>
                      <Close />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  py={3}
                  px={2}
                  width="100%"
                >
                  <Button
                    color="inherit"
                    fullWidth={isSmall}
                    onClick={onCloseHandle}
                  >
                    <Link
                      to="/listausuario"
                      onClick={onCloseHandle}
                      className="mt-10 mb-10"
                    >
                      <div className="text-[#20A4A3] font-semibold ">
                        Lista de Usuarios
                      </div>
                    </Link>
                  </Button>
                  <Button
                    color="inherit"
                    fullWidth={isSmall}
                    onClick={onCloseHandle}
                  >
                    <Link
                      to="/status"
                      onClick={onCloseHandle}
                      className="mt-10 mb-10"
                    >
                      <div className="text-[#20A4A3] font-semibold ">
                        Status
                      </div>
                    </Link>
                  </Button>
                  <Button
                    color="inherit"
                    fullWidth={isSmall}
                    onClick={onCloseHandle}
                  >
                    <Link
                      to="/random"
                      onClick={onCloseHandle}
                      className="mt-10 mb-10"
                    >
                      <div className="text-[#20A4A3] font-semibold ">
                        Random Dog
                      </div>
                    </Link>
                  </Button>
                  <Button
                    color="inherit"
                    fullWidth={isSmall}
                    onClick={onCloseHandle}
                  >
                    <Link
                      to="/listaclientes"
                      onClick={onCloseHandle}
                      className="mt-10 mb-10"
                    >
                      <div className="text-[#20A4A3] font-semibold ">
                        Lista de Clientes
                      </div>
                    </Link>
                  </Button>
                </Box>
              </Dialog>
            </Hidden>
          </Toolbar>
        </AppBar>
        <div className="pt-20 mx-auto sm:px-10 lg:px-8">{children}</div>
      </Box>
    </>
  );
};
