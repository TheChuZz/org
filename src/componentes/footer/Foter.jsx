import "./Foter.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(../public/img/icons/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="../public/img/icons/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="../public/img/icons/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="../public/img/icons/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='../public/img/icons/Logo.png' alt='org' />
        <strong>Desarrollado por Ruben Arellano</strong>
    </footer>
}

export default Footer