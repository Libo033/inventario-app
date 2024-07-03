import Image from "next/image";
import Link from "next/link";
import React from "react";

// https://colormagic.app/palette/sNt5qw7vPMLc8RjPWyOJ

const IniciarSesion = () => {
  return (
    <main className="box_bg min-h-screen w-screen grid place-content-center">
      <div className="bg-[#f3f3f1] min-w-80 border border-slate-300 rounded shadow-lg">
        <div className="flex justify-center pt-8">
          <Image
            className="bg-[#cd8948] rounded-full p-1"
            src={"/img/inventario_logo.svg"}
            alt="inventario app"
            width={90}
            height={90}
          />
        </div>
        <h1 className="text-3xl py-4 text-center font-medium">
          INVENTARIO APP
        </h1>
        <h2 className="text-xl text-center font-medium">Iniciar Sesion</h2>
        <form className="w-full">
          <div className="w-full flex flex-col items-center pt-6">
            <label className="w-10/12 text-left font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-10/12 bg-transparent focus:bg-white focus:border-[#2e4756] border border-[#8ca1a6] px-[4px] py-1 mt-px rounded outline-none"
              placeholder="ejemplo@gmail.com"
              type="email"
            />
          </div>
          <div className="w-full flex flex-col items-center pt-6">
            <label className="w-10/12 text-left font-medium" htmlFor="email">
              Contraseña
            </label>
            <input
              className="w-10/12 bg-transparent focus:bg-white focus:border-[#2e4756] border border-[#8ca1a6] px-[4px] py-1 mt-px rounded outline-none"
              placeholder="•••••••••"
              type="password"
            />
          </div>
          <div className="pt-8 pb-2 flex justify-center">
            <button className="bg-[#1e4870] uppercase text-white text-sm font-medium border border-slate-500 rounded-md w-10/12 h-10">
              iniciar sesion
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-10/12 flex justify-between">
              <Link
                className="text-sm text-blue-700 underline"
                href={"/cuenta/registrarse"}
              >
                Registrarse
              </Link>
              <Link
                className="text-sm text-blue-700 underline"
                href={"/cuenta/registrarse"}
              >
                Recuperar contraseña
              </Link>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <hr className="w-10/12 border-slate-400" />
          </div>
          <div className="flex justify-center  pb-4">
            <button
              type="button"
              className="w-10/12 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              Iniciar sesion con Google
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default IniciarSesion;
