import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import Test from './components/Test'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import PersonList from './components/PersonList'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      {/*<Greet name = "niraj kumar pandey"/>
      <Welcome name = "niraj pandey"/>
      <Message />
      */}
      {/* <PersonList /> */}
      <Form />
    </div>
  );
}

export default App;
