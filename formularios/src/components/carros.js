import React, { useState } from 'react';

const FormularioCarro = () => {
  const [formData, setFormData] = useState({
    fabricante: '',
    modelo: '',
    anoFabricacao: '',
    cor: '',
    quilometrosRodados: '',
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
      <input type="text" name="fabricante" placeholder="Fabricante" onChange={handleChange} />
      <input type="text" name="modelo" placeholder="Modelo" onChange={handleChange} />
      <input type="number" name="anoFabricacao" placeholder="Ano de Fabricação" onChange={handleChange} />
      <input type="text" name="cor" placeholder="Cor" onChange={handleChange} />
      <input type="number" name="quilometrosRodados" placeholder="Quilômetros Rodados" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioCarro;