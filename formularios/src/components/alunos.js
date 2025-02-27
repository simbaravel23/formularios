import React, { useState } from 'react';

const FormularioAluno = () => {
  const [formData, setFormData] = useState({
    nome: '',
    nomePai: '',
    nomeMae: '',
    dataNascimento: '',
    corPele: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" onChange={handleChange} />
      <input type="text" name="nomePai" placeholder="Nome do Pai" onChange={handleChange} />
      <input type="text" name="nomeMae" placeholder="Nome da Mãe" onChange={handleChange} />
      <input type="date" name="dataNascimento" onChange={handleChange} />
      <input type="text" name="corPele" placeholder="Cor da Pele" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioAluno;