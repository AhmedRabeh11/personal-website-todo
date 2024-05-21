import React, { useState } from "react";
import { Todo } from "../components/Todo";
import { TodoForm } from "../components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "../components/EditTodoForm";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todo-page">


      <NavBar />
      <div className="todo-wrapper" >
        <h1 style={{color: "white"}}>Get Things Done!</h1>
        <TodoForm addTodo={addTodo} />
        {/* Display todos */}
        {
          todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
            )
          )
        }
      </div >
      <Footer />
    </div>
  );
};

export default TodoWrapper;
