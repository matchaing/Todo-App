import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { addTodo, deleteTodo } from '../redux/actions';
import styles from './ListPage.module.css';

function ListPage() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  
    const [newTodo, setNewTodo] = useState('');
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        dispatch(addTodo(newTodo));
        setNewTodo('');
      }
    };
  
    const handleDeleteTodo = id => {
      dispatch(deleteTodo(id));
    };
  
    return (
      <div>
        <Header />
        <div>
          <h2>Todo</h2>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              placeholder="Enter a new todo"
              className={styles.input}
            />
            <button onClick={handleAddTodo} className={styles.addButton}>Add</button> 
          </div>
          <ul className={styles.todoList}>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => handleDeleteTodo(todo.id)} className={styles.deleteButton}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default ListPage;