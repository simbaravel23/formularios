import React, { useState } from 'react';

const FormularioPneu = () => {
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    largura: '',
    raio: '',
    espessura: '',
    cargaMaxima: '',
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
      <input type="text" name="marca" placeholder="Marca" onChange={handleChange} />
      <input type="text" name="modelo" placeholder="Modelo" onChange={handleChange} />
      <input type="number" name="largura" placeholder="Largura" onChange={handleChange} />
      <input type="number" name="raio" placeholder="Raio" onChange={handleChange} />
      <input type="number" name="espessura" placeholder="Espessura" onChange={handleChange} />
      <input type="number" name="cargaMaxima" placeholder="Carga Máxima" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioPneu;