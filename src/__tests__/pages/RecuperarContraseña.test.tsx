import { createMockRouter } from "@/__mocks__/createMockRouter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

describe('Recuperar Contraseña page - "/cuenta/recuperar_contraseña"', () => {
  it("Tiene que tener el nombre de la APP.", () => {});

  it("Tiene que tener el logo de la APP.", () => {}); // Logo por definir

  it("Tiene que tener el titulo de “recuperar contraseña”.", () => {});

  it("Tiene que tener los inputs y labels “email”.", () => {});

  it("Tiene que tener el boton de “enviar”.", () => {});

  it("Tiene que tener el link de redireccion a iniciar sesion.", () => {});

  it("El link de redir. A iniciar sesion debe redireccionar a “/cuenta/iniciar_sesion”.", () => {});

  it("Despues de que el boton es presionado: tiene que tener el texto “Hemos enviado un correo electrónico”.", () => {});

  it("Despues de que el boton es presionado: tiene que tener el texto “Si la dirección de correo electrónico que ingresaste está asociada a una cuenta, recibirás un mensaje con instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada y sigue las indicaciones.”.", () => {});

  it("Despues de que el boton es presionado: tiene que tener el texto “Información Adicional: - Verifica también la carpeta de spam o correo no deseado. -Si no recibes el correo en unos minutos, intenta nuevamente o contacta a nuestro soporte.”.", () => {});
});
