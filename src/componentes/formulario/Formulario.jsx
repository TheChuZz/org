import "../formulario/Formulario.css";
import CampoTexto from "../Campo_texto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

import { useState } from "react";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registarColaborador, crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    };
    registarColaborador(datosEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    let datosEnv = {
      titulo: titulo,
      colorPrimario: color
    }
    console.log(datosEnv)
    crearEquipo(datosEnv);
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          titulos="Nombre"
          placeholder="Ingresa tu nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <CampoTexto
          titulos="Puesto"
          placeholder="Ingresa tu puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <CampoTexto
          titulos="Foto"
          placeholder="Ingresa tu url de git para tu imagen"
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones valor={equipo} actuazarEquipo={setEquipo} />
        <Boton>Crear</Boton>
      </form>
      {/* <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <CampoTexto
          titulos="Titulo"
          placeholder="Ingresa el Titulo"
          required
          valor={titulo}
          actualizarValor={setTitulo}
        />
        <CampoTexto
          titulos="Color"
          placeholder="Ingresa el color en HEX"
          required
          valor={color}
          actualizarValor={setColor}
          type="color"
        />
        <Boton>Registrar Equipo</Boton>
      </form> */}
    </section>
  );
};

export default Formulario;
