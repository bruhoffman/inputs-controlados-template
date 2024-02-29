import React, { useState } from "react";
import { MainContainer, Form, Input, Select } from "./styles";

function MainPage() {
  const [nome, setNome] = useState("");
  const nomeChange = (event) => {
    setNome(event.target.value);
  };

  const [idade, setIdade] = useState("");
  const idadeChange = (event) => {
    setIdade(event.target.value);
  };

  const [estadoCivil, setEstadoCivil] = useState("");
  const mudarEstadoCivil = (event) => {
    setEstadoCivil(event.target.value);
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={nomeChange} />
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={idadeChange} />
        </label>
        <Select value={estadoCivil} onChange={mudarEstadoCivil}>
          <option>Nenhum</option>
          <option>Solteiro(a)</option>
          <option>Casado(a)</option>
          <option>Viuvo(a)</option>
          <option>Divorciado(a)</option>
        </Select>
        <button>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
