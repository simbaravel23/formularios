import FormularioCarro from './components/carros';
import FormularioInstrutor from './components/instrutores';
import FormularioAluno from './components/alunos';
import FormularioMateria from './components/materiais';
import FormularioLivro from './components/livros';
import FormularioFilme from './components/filmes';
import FormularioPneu from './components/pneus';
import FormularioInstrumento from './components/instrumentos'
import './App.css';

function App() {
  return (
    <div className="App">
      Carros
      <FormularioCarro/>
      Instrutores
      <FormularioInstrutor/>
      Alunos
      <FormularioAluno/>
      Materiais
      <FormularioMateria/>
      Livro
      <FormularioLivro/>
      Filmes
      <FormularioFilme/>
      Pneus
      <FormularioPneu/>
      Instrumentos
      <FormularioInstrumento/>

    
    </div>
  );
}

export default App;
