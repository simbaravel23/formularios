import React, { useState } from 'react';

const FormularioInstrutor = () => {
  const [formData, setFormData] = useState({
    nome: '',
    especialidade: '',
    dataNascimento: '',
    endereco: '',
    comum: '',
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
      <input type="text" name="especialidade" placeholder="Especialidade" onChange={handleChange} />
      <input type="date" name="dataNascimento" onChange={handleChange} />
      <input type="text" name="endereco" placeholder="Endereço" onChange={handleChange} />
      <input type="text" name="comum" placeholder="Comum" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioInstrutor;