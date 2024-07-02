import { createMockRouter } from "@/__mocks__/createMockRouter";
import RecuperarContraseña from "@/app/cuenta/recuperar_contraseña/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

describe('Recuperar Contraseña page - "/cuenta/recuperar_contraseña"', () => {
  it("Tiene que tener el nombre de la APP.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("heading", { name: /INVENTARIO APP/i }));
  });

  it("Tiene que tener el logo de la APP.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("img", { name: /inventario logo/i }));
  }); // Logo por definir

  it("Tiene que tener el titulo de “recuperar contraseña”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );

    expect(screen.getByText(/recuperar contraseña/i));
  });

  it("Tiene que tener los inputs y labels “email”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );

    expect(screen.getByText(/email/i));
  });

  it("Tiene que tener el boton de “enviar”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("button", { name: "enviar" }));
  });

  it("Tiene que tener el link de redireccion a iniciar sesion.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );

    expect(screen.getByRole("link", { name: /iniciar sesion/i }));
  });

  it("El link de redir. A iniciar sesion debe redireccionar a “/cuenta/iniciar_sesion”.", async () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );

    await userEvent.click(
      // Click en el link de registrarse
      screen.getByRole("link", { name: /iniciar sesion/i })
    );

    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/cuenta/iniciar_sesion");
  });

  it("Despues de que el boton es presionado: tiene que tener el texto “Hemos enviado un correo electrónico”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );
  });

  it("Despues de que el boton es presionado: tiene que tener el texto “Si la dirección de correo electrónico que ingresaste está asociada a una cuenta, recibirás un mensaje con instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada y sigue las indicaciones.”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );
  });

  it("Despues de que el boton es presionado: tiene que tener el texto “Información Adicional: - Verifica también la carpeta de spam o correo no deseado. -Si no recibes el correo en unos minutos, intenta nuevamente o contacta a nuestro soporte.”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <RecuperarContraseña />
      </AppRouterContext.Provider>
    );
  });
});
