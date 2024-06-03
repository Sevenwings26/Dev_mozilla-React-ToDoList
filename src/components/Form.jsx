import { useState } from "react";

function Form(props) {
  // set State for changing events
  const [name, setName ] = useState("");

  // handle Change 
  function handleChange(event) {
    setName(event.target.value);
  }
  
  // Using event 
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">
            What needs to be done?
          </label>
        </h2>
        <input type="text"
          id="new-todo-input" className="input input-lg" name="text" autoComplete="off" 
          value={name} onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
