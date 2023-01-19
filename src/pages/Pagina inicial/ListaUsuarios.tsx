import { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Theme } from "../../components/Theme/Theme";
import { CardUsuario } from "../../components/Cards/CardUsuario";


export const ListaUsuarios = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Error ao efetuar req");
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "Nome",
      },
    ],
    []
  );

  return (
    <>
      <Theme>
        <div className="flex items-center space-x-4 sm:px-20  ">
          <h2 className="py-4 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl mb-5  sm:truncate">
            Lista de Usuarios
          </h2>
        </div>
        {/* TABELA/CONTEUDO/CARDS... */}
        <div className="  sm:ml-10 ">
          <CardUsuario/>
        </div>
      </Theme>
    </>
  );
};
