import * as React from 'react';
import TodoList from './TodoList';

const App = () => {
    const [text, setText] = React.useState('');
    const [todos, setTodos] = React.useState([
        {
            id: 'todo-1',
            name: 'First Todo'
        },
        {
            id: 'todo-2',
            name: 'Second Todo'
        }
    ])

    const handleChangeText = (event: any) => {
        setText(event.target.value);
    }

    const handleAddTodo = () => {
        setTodos(todos.concat({ id: 'todo-'+ todos.length + 1, name: text }));
        setText('');
    }

    const handleRemoveTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChangeText} />
            <button type="button" onClick={handleAddTodo}>
                Add Todo
            </button>
            <TodoList list={todos} onRemove={handleRemoveTodo} />
        </div>
    )
}
export default App;