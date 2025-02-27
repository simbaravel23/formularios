import React, { useState } from 'react';

const FormularioFilme = () => {
  const [formData, setFormData] = useState({
    nome: '',
    diretor: '',
    assunto: '',
    classificacaoEtaria: '',
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
      <input type="text" name="diretor" placeholder="Diretor" onChange={handleChange} />
      <input type="text" name="assunto" placeholder="Assunto" onChange={handleChange} />
      <input type="text" name="classificacaoEtaria" placeholder="Classificação Etária" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioFilme;