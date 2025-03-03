import React, { useState } from 'react';

const FormularioAnimal = () => {
  const [formData, setFormData] = useState({
    nome: '',
    nomeCientifico: '',
    especie: '',
    grupo: '',
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
      <input type="text" name="nomeCientifico" placeholder="Nome Científico" onChange={handleChange} />
      <input type="text" name="especie" placeholder="Espécie" onChange={handleChange} />
      <input type="text" name="grupo" placeholder="Grupo" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioAnimal;