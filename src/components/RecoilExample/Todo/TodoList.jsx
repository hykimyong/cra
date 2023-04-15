import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from './TodoStore'
import TodoItem from './TodoItem';
import TodoListCreator from './TodoListCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

export default function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
        <TodoListStats />
        <TodoListFilters />
        <TodoListCreator/>
        {todoList.map(item=>(
            <TodoItem key={item.id} item={item}/>
        ))}
    </div>
  )
}
