// src/components/Time/index.js

import "./Time.css"
import Colaborador from "../Colaborador";


const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria}
    console.log(props)
    return (
        //Se o array de membros não estiver vazio, renderizamos o componente Time.
        (props.members.length > 0) && <section className="time" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores" id={props.nome} >
                {props.members.map(
                    member => <Colaborador
                        cor={ props.corPrimaria}
                        nome={ member.nome}
                        cargo={member.cargo}
                        imagem={member.imagem}
                        key={member.nome}
                    />
                )}
            </div>
        </section>
    )
}
export default Time;

