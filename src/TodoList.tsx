import * as React from 'react';

const TodoList = React.memo((props: any) => {
    console.log('Todo List is Rendering');
    const { list, onRemove } = props;

    return (
        <ul>
            {
                list.map((todo: any) => (<ListItem item={todo} key={todo.id} onRemove={onRemove} />) )
            }
        </ul>
    )
})

const ListItem = React.memo(({ item, onRemove } : any) => {
    console.log('Todo Item is Rendering');
    return (
      <li>
        {item.name}
        <button type="button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </li>
    );
})
export default TodoList;