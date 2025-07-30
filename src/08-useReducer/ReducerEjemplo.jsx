import { useReducer } from "react";

const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

// 3. React introduce el nuevo estado + la accion mandada
const todoReducer = (state, action) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

export const ReducerEjemplo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const newTodo = {
    id: 2,
    todo: "Recolectar la piedra del poder",
    done: false,
  };

  // 1. Se ejecuta con el evento onClick del boton
  const handleAddTodo = () => {
    const addTodoAction = {
      type: "[TODO] add todo",
      payload: newTodo,
    };

    dispatch(addTodoAction); // 2. Se ejecuta dispatch con la accion,
  };

  return (
    <div>
      <h1>TodoApp</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
      <button onClick={handleAddTodo}>Agregar Todo</button>
    </div>
  );
};
