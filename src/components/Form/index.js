// /src/components/Form/index.js

import "./Form.css";
import InputText from "../InputText";
import InputOption from "../InputOptions";
import Btn from "../Btn";
import {useState} from "react";

const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('https://github.com/raul-franca.png');
    const [time, setTime] = useState('');


    const submit = (e) => {
        e.preventDefault();
        props.onAddMember({nome, cargo, imagem, time});
        setNome('');
        setCargo('');
        setTime('');
        // setImagem('');
    }

    return (
       <section className="form">
           <form onSubmit={submit}>
               <h2>Preencha os dados para criar o card do colaborador.</h2>
               <InputText
                   value={nome}
                   change={setNome}
                   label="Nome:"
                   required={true}
                   placeholder="Digite o nome"
               />
               <InputText
                   value={cargo}
                   change={setCargo}
                   label="Cargo:"
                   required={true}
                   placeholder="Digite o cargo"
               />
               <InputText
                   value={imagem}
                   change={setImagem}
                   label="Imagem:"
                   placeholder="Digite o endereço da imagem"
               />
               <InputOption
                    value={time}
                    change={setTime}
                    label="Time:"
                    required={true}
                    placeholder="Selecione a time"
                    options={props.times}
               />
               <Btn>Salvar</Btn>
           </form>
       </section>
    )
}

export default Form;