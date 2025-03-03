import React, { useState } from 'react';

const FormularioCurriculo = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    curriculo: '',
    habilidades: '',
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
      <textarea name="curriculo" placeholder="Currículo" onChange={handleChange} />
      <textarea name="habilidades" placeholder="Habilidades" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioCurriculo;