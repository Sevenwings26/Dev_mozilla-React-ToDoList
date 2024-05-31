function Form() {
  return (
    <div>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input-lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
