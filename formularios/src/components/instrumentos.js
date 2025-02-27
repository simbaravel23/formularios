import React, { useState } from 'react';

const FormularioInstrumento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
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
      <input type="text" name="tipo" placeholder="Tipo" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioInstrumento;