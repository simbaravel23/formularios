import React, { useState } from 'react';

const FormularioCasa = () => {
  const [formData, setFormData] = useState({
    tipo: '',
    endereco: '',
    areaTerreno: '',
    areaConstruida: '',
    quantidadeQuartos: '',
    quantidadeBanheiros: '',
    temEdicula: false,
    temChurrasqueira: false,
    temPiscina: false,
    valorCondominio: '',
    precoVenda: '',
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="tipo" placeholder="Tipo" onChange={handleChange} />
      <input type="text" name="endereco" placeholder="Endereço" onChange={handleChange} />
      <input type="number" name="areaTerreno" placeholder="Área do Terreno" onChange={handleChange} />
      <input type="number" name="areaConstruida" placeholder="Área Construída" onChange={handleChange} />
      <input type="number" name="quantidadeQuartos" placeholder="Quantidade de Quartos" onChange={handleChange} />
      <input type="number" name="quantidadeBanheiros" placeholder="Quantidade de Banheiros" onChange={handleChange} />
      <label>
        <input type="checkbox" name="temEdicula" checked={formData.temEdicula} onChange={handleChange} />
        Tem Edícula
      </label>
      <label>
        <input type="checkbox" name="temChurrasqueira" checked={formData.temChurrasqueira} onChange={handleChange} />
        Tem Churrasqueira
      </label>
      <label>
        <input type="checkbox" name="temPiscina" checked={formData.temPiscina} onChange={handleChange} />
        Tem Piscina
      </label>
      <input type="number" name="valorCondominio" placeholder="Valor do Condomínio" onChange={handleChange} />
      <input type="number" name="precoVenda" placeholder="Preço de Venda" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioCasa;