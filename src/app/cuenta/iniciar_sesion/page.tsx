import Image from "next/image";
import React from "react";

// https://colormagic.app/palette/sNt5qw7vPMLc8RjPWyOJ

const IniciarSesion = () => {
  return (
    <main className="h-screen w-screen grid place-content-center">
      <div className="bg-[#f3f3f1] min-w-80 border border-slate-300 rounded shadow-lg">
        <div className="flex justify-center pt-8">
          <Image
            className="bg-[#d9d5b5] rounded-full p-1"
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
        <form className="w-full" action="post">
          <div className="w-full flex flex-col items-center pt-6">
            <label className="w-10/12 text-left font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-10/12 bg-transparent focus:bg-white focus:border-[#2e4756] border border-[#8ca1a6] px-[4px] py-1 mt-px rounded outline-none"
              type="email"
            />
          </div>
          <div className="w-full flex flex-col items-center pt-6">
            <label className="w-10/12 text-left font-medium" htmlFor="email">
              Contraseña
            </label>
            <input
              className="w-10/12 bg-transparent focus:bg-white focus:border-[#2e4756] border border-[#8ca1a6] px-[4px] py-1 mt-px rounded outline-none"
              type="password"
            />
          </div>
          <div className="py-6 flex justify-center">
            <button className="bg-[#2e4756] uppercase text-white border border-slate-500 rounded-md w-10/12 h-10">
              iniciar sesion
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default IniciarSesion;
