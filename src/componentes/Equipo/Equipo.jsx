/* eslint-disable react/prop-types */
import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';



const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo,  id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;
  
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.75)
  }
  

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={obj}
        >
          <input 
          className="input-color" 
          type="color" 
          value={colorPrimario}
          onChange={(e) => {
            actualizarColor(e.target.value, id)
          }}
          />

          <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
          <div className="colaborador-img">
            {colaboradores.map((colaborador, index) => (
              <Colaborador 
              datos={colaborador} 
              key={index} 
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
              like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
