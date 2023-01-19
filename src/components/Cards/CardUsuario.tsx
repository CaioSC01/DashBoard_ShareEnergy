import { EnvelopeIcon, PhoneIcon,UserIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useEffect, useState } from "react";


export function CardUsuario() {
	const [usuario,setUsusario]=useState<any[]>([])

	useEffect(() => {
		axios
			.get(`https://randomuser.me/api/?results=50`)
			.then((response) => {
				setUsusario(response.data.results);
				console.log(response.data.results)
			})
			.catch(() => {
				console.log("Error ao efetuar req");
			});
	}, []);
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {usuario.map((user) => (
        <li
          key={user.email}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {user.name.first} {user.name.last}, {user.registered.age}
                </h3>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {user.role}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {user.email}
              </p>
            </div>
            <img
              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              src={user.picture.large}
              alt=""
            />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
        
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <UserIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3"> {user.login.username}</span>
                </a>
              </div>
           
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
