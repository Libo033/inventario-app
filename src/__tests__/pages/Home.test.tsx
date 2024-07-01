import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
  beforeEach(() => {
    render(<Home />);
  });

  it("Tiene que tener el nombre de la aplicacion", () => {
    expect(screen.getByText(/INVENTARIO APP/i));
  });

  it("Tiene que tener una breve descripcion.", () => {
    expect(
      screen.getByText(
        /Nuestra aplicación web de inventario te permite gestionar y controlar tus productos de manera eficiente y organizada. Con una interfaz intuitiva y fácil de usar, puedes agregar, actualizar y eliminar artículos, realizar un seguimiento de las existencias. Optimiza tu inventario y evita desabastecimientos o excedentes, asegurando que siempre tengas lo que necesitas cuando lo necesitas./i
      )
    );
  });

  it("Tiene que tener un boton llamado “nuevo inventario”.", () => {
    expect(
      screen.getByRole("button", {
        name: /nuevo inventario/i,
      })
    );
  });

  it("El boton “nuevo inventario” debe redireccionar a “/inventario/nuevo”.", async () => {
    // FALTA CREAR MOCK DE ROUTER E IMPLEMENTARLO EN EL "beforeEach"
    await userEvent.click(
      screen.getByRole("button", {
        name: /nuevo inventario/i,
      })
    );
  });

  it("Tiene que tener el boton “unirse a inventario”.", () => {
    expect(
      screen.getByRole("button", {
        name: /unirse a inventario/i,
      })
    );
  });

  it("El boton “unirse a inventario” debe redireccionar a “/inventario/unirse”.", async () => {
    // FALTA CREAR MOCK DE ROUTER E IMPLEMENTARLO EN EL "beforeEach"
    await userEvent.click(
      screen.getByRole("button", {
        name: /unirse a inventario/i,
      })
    );
  });

  it("Tiene que mostrar los inventarios en los que se encuentra.", () => {
    expect(screen.getByText(/heladera y freezer/i));
    expect(screen.getByText(/otros/i));
  });
});
