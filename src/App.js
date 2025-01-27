// src/App.js

import Banner from "./components/Banner/Banner";
import Form from "./components/Form";

import React, {useState} from "react";
import Time from "./components/Time";
import Footer from "./components/Footer";


const times = [
    {
        nome: 'Programação',
        corPrimaria: '#57C278',
        corSecundaria: '#D9F7E9'
    },
    {
        nome: 'Front-End',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF'
    },
    {
        nome: 'Data Science',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2'
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#DB6EBF',
        corSecundaria: '#FAE9F5'
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FFBA05',
        corSecundaria: '#FFF5D9'
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF'
    }
];


function App() {

    const [members,setMembers] = useState([]);

    const onAddMember = (member) => {
        setMembers([...members, member]);
    }

  return (
    <div>
        <Banner />
        <Form
            times={ times.map( time => time.nome) }
            onAddMember={ member => onAddMember(member)}
        />
        {times.map((time) => (
            <Time
                nome={time.nome}
                corPrimaria={time.corPrimaria}
                corSecundaria={time.corSecundaria}
                // filtra member.time === time.nome
                members={members.filter(member => member.time === time.nome)}
            />
        ))};
        <Footer />
    </div>

);
}

export default App;
