import { useState } from "react";
import Banner from "./Componentes/Banner";
import Form from "./Componentes/Form";
import Time from "./Componentes/Time";

function App() {

  const times = [
    {
      nome: 'Falcons',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
  
    {
      nome: 'Benfica',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Vikings',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Real',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Borussia',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Patriots',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Barcelona',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }

  ]

  //salvando jogador na lista de objeto
  const [jogadores, setJogadores] = useState([])
  const jogadorAdd = (jogador) => {
    console.log(jogador);
    setJogadores([...jogadores, jogador])
  }

  return (
    <div>
      <Banner/>
      <Form nomeTimes={times.map(time => time.nome)} jogadorCadastrado={jogador => jogadorAdd(jogador)}/>
       
      {times.map(time => <Time key={time.nome} timeCabecalho={time.nome} 
         corPrimaria={time.corPrimaria}  
         corSecundaria={time.corSecundaria} 
         jogadores={jogadores.filter( jogador => jogador.time === time.nome)}
      />)}

    </div>
  );
}

export default App;
