import * as React from 'react';

const TodoList = (props: any) => {
    const { list, onRemove } = props;

    return (
        <ul>
            {
                list.map((todo: any) => (<ListItem item={todo} key={todo.id} onRemove={onRemove} />) )
            }
        </ul>
    )
}

const ListItem = ({ item, onRemove } : any) => {
    return (
      <li>
        {item.name}
        <button type="button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </li>
    );
  };
export default TodoList;