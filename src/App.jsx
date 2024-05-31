import React from "react";
import Todo from './components/Todo.jsx'
import Form from "./components/Form.jsx";
import FilterButton from "./components/FilterButton.jsx";

function App(props) {
  // to avoid repitition - variable to be called later 
  const taskList = props.tasks?.map((task) => (
  <Todo 
  id={task.id} 
  name={task.name} 
  completed = {task.completed} 
  key = {task.id} 
  />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <FilterButton />
      <FilterButton />
      <FilterButton />

      {/* <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>All</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show</span>
          <span> Active </span>
          <span className="visually-hidden">tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div> */}

      <h2 id="list-heading">3 tasks remaining</h2>
      
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
      {taskList}

      {/* Repititive  */}
      {/* <Todo name='Eat' id="todo-0" completed />
      <Todo name='Code' id="todo-1"/>
      <Todo name='Rehearse' id="todo-2"/> */}
{/*         
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>

        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default App;
