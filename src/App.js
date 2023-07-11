import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';


function App() {

  return (
    <div className="App">
      <h1>Teste</h1>
      <Evento numero={0}/>
      <hr/>
      <Form/>
    </div>
  );
}

export default App;
