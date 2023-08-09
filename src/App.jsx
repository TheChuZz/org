import Header from "./componentes/Header/Header.jsx";
import Formulario from "./componentes/formulario/Formulario.jsx";
import MiOrg from "./componentes/MiOrg/MiOrg.jsx";
import Equipo from "./componentes/Equipo/Equipo.jsx";
import Footer from "./componentes/footer/Foter.jsx";
import { v4 as uuidv4 } from 'uuid';

import { useState } from "react";

function App() {
  const [mostrarDormulario, actualizarMostrar] = useState(true);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nombre: "Ruben Arellano",
      puesto: "Edgresado",
      foto: "https://avatars.githubusercontent.com/u/87580414?v=4",
      equipo: "Front End",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    },
  ]);

  const [equipos, setEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarDormulario);
  };

  //Registar Colaborador
  const registarColaborador = (colaborador) => {
    //spread operator
    setColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminarColaborador", id);
    const nuevosClolaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosClolaboradores)
  };

  //cambio color
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;

    });
    setEquipos(equiposActualizados);
  };

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, {...nuevoEquipo, id:uuidv4}])
  }

  //corazon
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id ===id){
        colaborador.fav =  !colaborador.fav
      }
      return close
    })
    actualizarMostrar(colaboradoresActualizados);
  }

  return (
    <>
      <Header />
      {mostrarDormulario === true ? (
        <Formulario registarColaborador={registarColaborador}
        crearEquipo={crearEquipo}
       />
      ) : (
        <></>
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
