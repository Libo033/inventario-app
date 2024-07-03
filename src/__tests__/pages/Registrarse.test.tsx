import { createMockRouter } from "@/__mocks__/createMockRouter";
import Registrarse from "@/app/cuenta/registrarse/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

describe('Registrarse page - "/cuenta/registrarse"', () => {
  it("Tiene que tener el nombre de la APP.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Registrarse />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("heading", { name: /INVENTARIO APP/i }));
  });

  it("Tiene que tener el logo de la APP.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Registrarse />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("img", { name: /inventario logo/i }));
  }); // Logo por definir

  it("Tiene que tener el titulo de “registrarse”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Registrarse />
      </AppRouterContext.Provider>
    );

    expect(screen.getByText(/registrarse/i));
  });

  it("Tiene que tener los inputs y labels “email”, “contraseña” y “repetir contraseña”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Registrarse />
      </AppRouterContext.Provider>
    );

    expect(screen.getByText(/email/i));
    expect(screen.getByText(/contraseña/i));
    expect(screen.getByText(/repetir contraseña/i));
  });

  it("Tiene que tener el boton de “registrarse”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Registrarse />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("button", { name: "registrarse" }));
  });

  it("Tiene que tener el link de redireccion a iniciar sesion.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Registrarse />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("link", { name: /iniciar sesion/i }));
  });

  it("El link de redir. A iniciar sesion debe redireccionar a “/cuenta/iniciar_sesion”.", async () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Registrarse />
      </AppRouterContext.Provider>
    );

    await userEvent.click(
      // Click en el link de registrarse
      screen.getByRole("link", { name: /iniciar sesion/i })
    );

    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/cuenta/iniciar_sesion", {
      scroll: true,
    });
  });
});
