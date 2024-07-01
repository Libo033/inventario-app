import { createMockRouter } from "@/__mocks__/createMockRouter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

describe('Iniciar Sesion page - "/cuenta/iniciar_sesion"', () => {
  it("Tiene que tener el nombre de la APP.", () => {});

  it("Tiene que tener el logo de la APP.", () => {}); // Logo por definir

  it("Tiene que tener el titulo de “iniciar sesion”.", () => {});

  it("Tiene que tener los inputs y labels “email” y “contraseña”.", () => {});

  it("Tiene que tener el boton de “iniciar sesion”.", () => {});

  it("Tiene que tener links de redireccion a registrarse y recuperar contraseña.", () => {});

  it("El link de redir. A registrarse debe redireccionar a “/cuenta/registrarse”.", () => {});

  it("El link de redir. A recuperar contraseña debe redireccionar a “/cuenta/recuperar_contraseña”.", () => {});
});
