// /src/components/Form/index.js


import "./Form.css";
import InputText from "../InputText";
import InputOption from "../InputOptions";
import Btn from "../Btn";

const Form = () => {
    const options = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
       <section className="form">
           <form>
               <h2>Preencha os dados para criar o card do colaborador.</h2>
               <InputText label="Nome:" placeholder="Digite o nome" />
               <InputText label="Cargo:" placeholder="Digite o cargo" />
               <InputText label="Imagem:" placeholder="Digite o endereço da imagem" />
               <InputOption label="Time:" placeholder="Selecione a time" options={options} />
               <Btn>Salvar</Btn>
           </form>
       </section>
    )
}

export default Form;