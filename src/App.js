import './App.css';
import Card from './components/Card';
import data from './info.json';

function App() {
  return (
    <div className='app'>
      <Card info={data}/>
    </div>
  );
}

export default App;
