// import logo from './logo.svg';
import './App.css';
import { observableTodoStore } from './app/ObservableTodoStore';
// import MobxExample from './components/MobxExample';
import TodoList from './components/TodoList';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <>
    <TodoList store={observableTodoStore}/>
    </>
  );
}

export default App;
