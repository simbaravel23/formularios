import React, { useState } from 'react';

const FormularioEscola = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    quantidadeAlunos: '',
    telefone: '',
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
      <input type="text" name="endereco" placeholder="Endereço" onChange={handleChange} />
      <input type="number" name="quantidadeAlunos" placeholder="Quantidade de Alunos" onChange={handleChange} />
      <input type="tel" name="telefone" placeholder="Telefone" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioEscola;