
import "./Colaborador.css"

const Colaborador = ({nome,cargo,imagem, cor}) => {
    return (
        <div className='colaborador' id={nome}>
            <div className='cabecalho' style={{ backgroundColor:cor }}>
                <img src={imagem} alt=''/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;