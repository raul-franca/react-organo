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

    const submit = (e) => {
      e.preventDefault();
        console.log('Formulário enviado');
    }

    return (
       <section className="form">
           <form onSubmit={submit}>
               <h2>Preencha os dados para criar o card do colaborador.</h2>
               <InputText required ={true} label="Nome:" placeholder="Digite o nome" />
               <InputText required ={true} label="Cargo:" placeholder="Digite o cargo" />
               <InputText label="Imagem:" placeholder="Digite o endereço da imagem" />
               <InputOption required ={true} label="Time:" placeholder="Selecione a time" options={options} />
               <Btn>Salvar</Btn>
           </form>
       </section>
    )
}

export default Form;