import React, { useState } from 'react'
import { MainContainer, Form, Input, Selection, Botao } from './styles'

function MainPage() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  };

  const onChangeEstadoCivil = (event) => {
    setEstadoCivil(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  function imprimirValoresDosInputs(event) {
    event.preventDefault();
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Estado Civil: ${estadoCivil}`);
    console.log(`E-mail: ${email}`);
    console.log(`Senha: ${senha}`);

    limpartInputs();
  }

  function limpartInputs() {
    setNome(" ");
    setIdade(" ");
    setEstadoCivil(" ");
    setEmail(" ");
    setSenha(" ");
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={imprimirValoresDosInputs}>
        <label>
          Nome:
          <Input onChange={onChangeNome} />
        </label>
        <label>
          Idade:
          <Input onChange={onChangeIdade} />
        </label>
        <label>
          Estado Civil:
          <Selection onChange={onChangeEstadoCivil}>
            <option></option>
            <option>Solteiro(a)</option>
            <option>Casado(a)</option>
            <option>Divorciado(a)</option>
            <option>Viúvo(a)</option>
          </Selection>
        </label>
        <label>
          E-mail:
          <Input type='email' onChange={onChangeEmail} />
        </label>
        <label>
          Senha:
          <Input type='password' onChange={onChangeSenha} />
        </label>
        <Botao>Enviar dados</Botao>
      </Form>
    </MainContainer>
  )
}

export default MainPage
