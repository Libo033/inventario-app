import { createMockRouter } from "@/__mocks__/createMockRouter";
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

global.fetch = jest.fn(
  (): Promise<any> =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { _id: "1", inventario: "Heladera y Freezer" },
          { _id: "2", inventario: "Otros" },
        ]),
    })
);

describe('Home Page - "/"', () => {
  it("Tiene que tener el nombre de la aplicacion", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Home />
      </AppRouterContext.Provider>
    );

    expect(screen.getByText(/INVENTARIO APP/i));
  });

  it("Tiene que tener una breve descripcion.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Home />
      </AppRouterContext.Provider>
    );

    expect(
      screen.getByText(
        /Nuestra aplicación web de inventario te permite gestionar y controlar tus productos de manera eficiente y organizada. Con una interfaz intuitiva y fácil de usar, puedes agregar, actualizar y eliminar artículos, realizar un seguimiento de las existencias. Optimiza tu inventario y evita desabastecimientos o excedentes, asegurando que siempre tengas lo que necesitas cuando lo necesitas./i
      )
    );
  });

  it("Tiene que tener un boton llamado “nuevo inventario”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Home />
      </AppRouterContext.Provider>
    );

    expect(
      screen.getByRole("button", {
        name: /nuevo inventario/i,
      })
    );
  });

  it("El boton “nuevo inventario” debe redireccionar a “/inventario/nuevo”.", async () => {
    // MOCK IMPLEMENTADO. CORROBORAR SI FUNCIONA CORRECTAMENTE.
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Home />
      </AppRouterContext.Provider>
    );

    await userEvent.click(
      // Click en el boton
      screen.getByRole("button", {
        name: /nuevo inventario/i,
      })
    );

    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/inventario/nuevo", {
      scroll: true,
    });
  });

  it("Tiene que tener el boton “unirse a inventario”.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Home />
      </AppRouterContext.Provider>
    );

    expect(
      screen.getByRole("button", {
        name: /unirse a inventario/i,
      })
    );
  });

  it("El boton “unirse a inventario” debe redireccionar a “/inventario/unirse”.", async () => {
    // MOCK IMPLEMENTADO. CORROBORAR SI FUNCIONA CORRECTAMENTE.
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Home />
      </AppRouterContext.Provider>
    );

    await userEvent.click(
      // Click en el boton
      screen.getByRole("button", {
        name: /unirse a inventario/i,
      })
    );

    const pushed = router.push;

    expect(pushed).toHaveBeenCalledWith("/inventario/unirse", {
      scroll: true,
    });
  });

  it("Tiene que mostrar los inventarios en los que se encuentra.", () => {
    const router = createMockRouter({});
    render(
      <AppRouterContext.Provider value={router}>
        <Home />
      </AppRouterContext.Provider>
    );

    expect(screen.getByText(/heladera y freezer/i));
    expect(screen.getByText(/otros/i));
  });
});
