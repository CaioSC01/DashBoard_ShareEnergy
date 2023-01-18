import { Box, Button } from "@mui/material";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavegadoresItens = [
  {
    text: "  Lista Usuario",
	
  },
  {
    text: "  Status",
  },
  {
    text: "  Botão",
  },
  {
    text: "  Lista Clientes",
  },
];

export const Navegadores: React.FC = () => {
  return <Box>{NavegadoresItens.map(({  text }) => {
return(
	<>
	<AnchorLink>
		<Button color="primary" size="large" >
			{text}
		</Button>
	</AnchorLink>
	</>
)
	})}</Box>;
};
