import { useState } from 'react';
import './App.css'


function App() {
  const [anoNasc, setAnoNasc] = useState('');
  const [idade, setIdad] = useState(0); 
  const [nome, setNom] = useState('');

  const verIdade = () => {
    const anoAtual = new Date().getFullYear();
    const idadeCalc = anoAtual - parseInt(anoNasc, 10);
    setIdad(idadeCalc);
  };

  return (

    <div className="App">

      <h1>Calculadora paradescobrir sua Idade</h1>
      <label>
        Digite seu nome:
        <input type="text"
        onChange={(e) => setNom(e.target.value)}/>
      </label>
      <label>
        Digite seu ano de nascimento:
        <input
          type="number"
          value={anoNasc}
          onChange={(e) => setAnoNasc(e.target.value)}
        />
      </label>
      <button onClick={verIdade}>Calcular</button>
      {idade !== 0 && <p><strong>{nome}</strong> você tem: {idade} anos ^^</p>}
    </div>
  );
}

export default App;