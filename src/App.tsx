import './App.css';
import CounterView from './components/counter/CounterView';
import CounterButton from './components/counter/CounterButton';

function App() {
  return (
    <div className='App'>
      <CounterView />
      <CounterButton />
    </div>
  );
}

export default App;
