import { createMockRouter } from "@/__mocks__/createMockRouter";
import IniciarSesion from "@/app/cuenta/iniciar_sesion/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

describe('Iniciar Sesion page - "/cuenta/iniciar_sesion"', () => {
  it("Tiene que tener el nombre de la APP.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <IniciarSesion />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("heading", { name: /INVENTARIO APP/i }));
  });

  it("Tiene que tener el logo de la APP.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <IniciarSesion />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("img", { name: /inventario logo/i }));
  }); // Logo por definir

  it("Tiene que tener el titulo de “iniciar sesion”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <IniciarSesion />
      </AppRouterContext.Provider>
    );

    expect(screen.getByText(/iniciar sesion/i));
  });

  it("Tiene que tener los inputs y labels “email” y “contraseña”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <IniciarSesion />
      </AppRouterContext.Provider>
    );

    expect(screen.getByText(/email/i));
    expect(screen.getByText(/contraseña/i));
  });

  it("Tiene que tener el boton de “iniciar sesion”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <IniciarSesion />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("button", { name: "iniciar sesion" }));
  });

  it("Tiene que tener links de redireccion a registrarse y recuperar contraseña.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <IniciarSesion />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("link", { name: /registrarse/i }));
    expect(screen.getByRole("link", { name: /recuperar contraseña/i }));
  });

  it("El link de redir. A registrarse debe redireccionar a “/cuenta/registrarse”.", async () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <IniciarSesion />
      </AppRouterContext.Provider>
    );

    await userEvent.click(
      // Click en el link de registrarse
      screen.getByRole("link", { name: /registrarse/i })
    );

    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/cuenta/registrarse");
  });

  it("El link de redir. A recuperar contraseña debe redireccionar a “/cuenta/recuperar_contraseña”.", async () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <IniciarSesion />
      </AppRouterContext.Provider>
    );

    await userEvent.click(
      // Click en el link de recuperar contraseña
      screen.getByRole("link", { name: /recuperar contraseña/i })
    );

    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/cuenta/recuperar_contraseña");
  });
});
