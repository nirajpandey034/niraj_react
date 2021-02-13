import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import Test from './components/Test'

function App() {
  return (
    <div className="App">
      {/*<Greet name = "niraj kumar pandey"/>
      <Welcome name = "niraj pandey"/>
      <Message />
      */}
      <Counter />
      <Test />
    </div>
  );
}

export default App;
