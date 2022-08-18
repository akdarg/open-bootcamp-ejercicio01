import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactComponent from './components/container/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="Martín" />*/}
        {/*<Greetingf name="Pedro" />*/}
        <TaskListComponent></TaskListComponent>

        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;
