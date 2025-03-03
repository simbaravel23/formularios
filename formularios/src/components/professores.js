import React, { useState } from 'react';

const FormularioProfessor = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    especialidade: '',
    telefone: '',
    email: '',
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
      <input type="text" name="especialidade" placeholder="Especialidade" onChange={handleChange} />
      <input type="tel" name="telefone" placeholder="Telefone" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioProfessor;