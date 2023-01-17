import React, {
  InputHTMLAttributes,
  useCallback,
  useContext,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  //recaptcha
  const [robot, itsRobot] = useState(true);
  const [color, setColor] = useState(false);
  function onChange(value: any) {
    if (value != "") {
      itsRobot(false);
    }
  }

  //login

  // Abas para Login
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="flex min-h-full ">
      <div className="flex flex-1 flex-col justify-center py-40  ">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <div className=" px-10 py-3  ml-3 rounded-full ">
              <img
                className="h-full w-full"
                src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
                alt="Logo Shareenergy"
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Usuário
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      required
											placeholder="Digite seu usuario..."
                      className="block bg-[#e2e870a8] w-full appearance-none rounded-md border  px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      {...register("Login")}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Senha
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      type="password"
                      autoComplete="current-password"
											placeholder="Digite sua senha..."
                      required
                      className="block bg-[#e2e870a8] w-full appearance-none rounded-md border  px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      {...register("Senha")}
                    />
                  </div>
                </div>

                <div>
                  <button
                    disabled={loader}
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-[#20a4a3] py-2 px- text-sm font-medium text-white shadow-sm hover:bg-[#20a4b3] focus:outline-none focus:ring-2  focus:ring-offset-2"
                  >
                    {loader ? <CircularProgress /> : "Entrar"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
