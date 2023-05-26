// import logo from './logo.svg';
import { RecoilRoot } from 'recoil';
import './App.css';
// import FontButton from './components/RecoilExample/FontButton';
// import Text from './components/RecoilExample/Text';
// import CharacterCounter from './components/RecoilExample/CharacterCounter';
// import TodoList from './components/RecoilExample/Todo/TodoList';
import React from 'react';
import Text from './components/ZustandExample/Text';
import CharacterCounter from './components/ZustandExample/CharacterCounter';
import TodoList from './components/ZustandExample/Todo/TodoList';
import CurrentUserInfo from './components/ZustandExample/CurrentUserInfo';
import Scratches from './components/ZustandExample/Scratches';
import Profile from './components/SWRExample/Profile';
import Cache from './components/SWRExample/Cache';
import Example from './components/ReactQueryExample/Example';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { observableTodoStore } from './app/ObservableTodoStore';
// import MobxExample from './components/MobxExample';
// import TodoList from './components/TodoList';
// import Counter from './features/counter/Counter';
const queryClient = new QueryClient();

function App() {
  return (
    <>
    {/* <TodoList store={observableTodoStore}/> */}
    {/* <RecoilRoot>
       <FontButton/>
      <Text/>
      <CharacterCounter/> 
      <TodoList/>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUserInfo />
      </React.Suspense>
    </RecoilRoot> */}
    {/* <Text/>
    <CharacterCounter/>
    <TodoList/>
    <CurrentUserInfo/>
    <Scratches/> */}
    {/* <Profile/>
    <Cache/> */}
    <QueryClientProvider client={queryClient}>
      <Example/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
    </>
  );
}

export default App;
