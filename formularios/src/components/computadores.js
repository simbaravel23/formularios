import React, { useState } from 'react';

const FormularioComputador = () => {
  const [formData, setFormData] = useState({
    descricao: '',
    cpu: '',
    memoria: '',
    placaVideo: '',
    placaMae: '',
    fonte: '',
    armazenamento: '',
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
      <textarea name="descricao" placeholder="Descrição" onChange={handleChange} />
      <input type="text" name="cpu" placeholder="CPU" onChange={handleChange} />
      <input type="text" name="memoria" placeholder="Memória" onChange={handleChange} />
      <input type="text" name="placaVideo" placeholder="Placa de Vídeo" onChange={handleChange} />
      <input type="text" name="placaMae" placeholder="Placa Mãe" onChange={handleChange} />
      <input type="text" name="fonte" placeholder="Fonte" onChange={handleChange} />
      <input type="text" name="armazenamento" placeholder="Armazenamento" onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioComputador;