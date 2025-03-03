import React, { useState } from 'react';

const FormularioHino = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    numero: '',
    letra: '',
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
      <input type="text" name="titulo" placeholder="Título" onChange={handleChange} />
      <input type="number" name="numero" placeholder="Número" onChange={handleChange} />
      <textarea name="letra" placeholder="Letra" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioHino;