import './MiOrg.css'

import { useState } from 'react';


const MiOrg = (props) => {

    const [age, setAge] = useState(0);

    const cambioValor = () =>{ 
        if (age < 18){
            setAge(age + 1)
        } else {
            alert("maximo 18")
            setAge(0)
        }
           
    }

    return(
        <section className="MiOrg">
            <h3 className='MiOrg-tittle'>Mi Organizacion</h3>
            <img onClick={props.cambiarMostrar} src="/public/img/icons/Botão add-01 1.png" alt="add" />

            <div>{age}</div>
            <button onClick={cambioValor}>contar</button>

        </section>
    )
}

export default MiOrg;