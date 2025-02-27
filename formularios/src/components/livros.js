import React, { useState } from 'react';

const FormularioLivro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    autor: '',
    assunto: '',
    resumo: '',
    dataLancamento: '',
    precoSugerido: '',
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
      <input type="text" name="autor" placeholder="Autor" onChange={handleChange} />
      <input type="text" name="assunto" placeholder="Assunto" onChange={handleChange} />
      <textarea name="resumo" placeholder="Resumo" onChange={handleChange} />
      <input type="date" name="dataLancamento" onChange={handleChange} />
      <input type="number" name="precoSugerido" placeholder="Preço Sugerido" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioLivro;