import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    const equipos = [
        'Programcion',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseno',
        'Movil',
        'Inovacion y Gestion'
    ];

    const manejarCambio = (e) => {
        props.actuazarEquipo(e.target.value);
    }



    return (
        <div className="lista-opciones">
            <label htmlFor="">Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleciona el equipo</option>
                {equipos.map((equipo, index) => {
                    return <option key={index} value={equipo}>{equipo}</option>
                })}
            </select>

        </div>
    );
};
 
export default ListaOpciones;