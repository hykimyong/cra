// import logo from './logo.svg';
import { RecoilRoot } from 'recoil';
import './App.css';
// import FontButton from './components/RecoilExample/FontButton';
// import Text from './components/RecoilExample/Text';
// import CharacterCounter from './components/RecoilExample/CharacterCounter';
import TodoList from './components/RecoilExample/Todo/TodoList';
import CurrentUserInfo from './components/RecoilExample/CurrentUserInfo';
import React from 'react';
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
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUserInfo />
      </React.Suspense>
    </RecoilRoot>
    </>
  );
}

export default App;
