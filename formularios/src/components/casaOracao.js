import React, { useState } from 'react';

const FormularioCasaOracao = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    anciao: '',
    telefoneAnciao: '',
    cooperador: '',
    telefoneCooperador: '',
    cooperadorJovens: '',
    telefoneCooperadorJovens: '',
    diacono: '',
    telefoneDiacono: '',
    numeroUltimaSantaCeia: '',
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
      <input type="text" name="anciao" placeholder="Ancião" onChange={handleChange} />
      <input type="tel" name="telefoneAnciao" placeholder="Telefone do Ancião" onChange={handleChange} />
      <input type="text" name="cooperador" placeholder="Cooperador" onChange={handleChange} />
      <input type="tel" name="telefoneCooperador" placeholder="Telefone do Cooperador" onChange={handleChange} />
      <input type="text" name="cooperadorJovens" placeholder="Cooperador de Jovens" onChange={handleChange} />
      <input type="tel" name="telefoneCooperadorJovens" placeholder="Telefone do Cooperador de Jovens" onChange={handleChange} />
      <input type="text" name="diacono" placeholder="Diácono" onChange={handleChange} />
      <input type="tel" name="telefoneDiacono" placeholder="Telefone do Diácono" onChange={handleChange} />
      <input type="number" name="numeroUltimaSantaCeia" placeholder="Número da Última Santa Ceia" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioCasaOracao;