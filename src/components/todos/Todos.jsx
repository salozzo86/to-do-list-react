import ToDoItem from './ToDoItem';

const Todos = (props) => {
    return (
        <ul>
            {props.todos.map((todo) => {
                return (
                    <ToDoItem
                        key={todo.id}
                        summary={todo.summary}
                        notes={todo.notes}
                    />
                );
            })}
        </ul>
    );
};

export default Todos;
