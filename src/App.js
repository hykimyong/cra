// import logo from './logo.svg';
import { RecoilRoot } from 'recoil';
import './App.css';
// import FontButton from './components/RecoilExample/FontButton';
// import Text from './components/RecoilExample/Text';
// import CharacterCounter from './components/RecoilExample/CharacterCounter';
import TodoList from './components/RecoilExample/Todo/TodoList';
// import { observableTodoStore } from './app/ObservableTodoStore';
// import MobxExample from './components/MobxExample';
// import TodoList from './components/TodoList';
// import Counter from './features/counter/Counter';

function App() {
  return (
    <>
    {/* <TodoList store={observableTodoStore}/> */}
    <RecoilRoot>
      {/* <FontButton/>
      <Text/>
      <CharacterCounter/> */}
      <TodoList/>
    </RecoilRoot>
    </>
  );
}

export default App;
