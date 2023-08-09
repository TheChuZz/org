import "../Campo_texto/CampoTexto.css";
import { useState } from "react";

const CampoTexto = (props) => {
  const { titulos, placeholder } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  const { type = "text" } = props;

  return (
    <div className="campo">
      <label htmlFor="name">{titulos}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;
