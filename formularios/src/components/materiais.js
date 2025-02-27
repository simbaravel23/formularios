import React, { useState } from 'react';

const FormularioMateria = () => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    anoLetivo: '',
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
      <textarea name="descricao" placeholder="Descrição" onChange={handleChange} />
      <input type="number" name="anoLetivo" placeholder="Ano Letivo" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioMateria;