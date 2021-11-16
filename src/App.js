import './App.css';
import Header from './components/Header';
import CardsList from './components/CardsList';
import {defaultData} from './components/CardsList/stories/dataMock'

function App() {
  return (
    <div className="App">
      <Header title="Hello it is my Header"/>
      <CardsList title="Goods List" data={defaultData}/>
    </div>
  );
}

export default App;
