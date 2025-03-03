import React, { useState } from 'react';

const FormularioUsuario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    apelido: '',
    email: '',
    senha: '',
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
      <input type="text" name="apelido" placeholder="Apelido" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="senha" placeholder="Senha" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioUsuario;