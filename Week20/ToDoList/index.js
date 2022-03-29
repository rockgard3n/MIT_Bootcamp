function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])
  const addTodo = e => {
    // destructures the list, then adds our new value
    console.log("in function: " + e);
    const newTodos = [...todos, {text: e, isCompleted: false}];
    // sets it to the new list we just made
    setTodos(newTodos);
  }
  const removeTodo = e => {
    //get handle on id that targets div we want
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }
  return(
    <>
      {todos.map((todo, i) => (
        // the classname helps us target the div, the id and the onclick we use to remove it
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>
      ))}
      <TodoForm addTodo={addTodo}/>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
