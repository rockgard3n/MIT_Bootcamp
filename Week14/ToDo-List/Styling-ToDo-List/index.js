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
  // define variable and state to use for adding todos
  const [value, setValue] = React.useState('');
  // function to handle the input on an event
  const handleSubmit = e => {
    // prevents the autoreloud of page
    e.preventDefault();
    // if there is an empty value do nothing
    if (!value) return;
    // destructures the list, then adds our new value
    const newTodos = [...todos, {text: value, isCompleted: false}];
    // sets it to the new list we just made
    setTodos(newTodos);
    //resets it to empty after we're done with our shiz 
    setValue('');
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
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} placeholder="Add ToDo .." onChange={e => setValue(e.target.value)}/>
      </form>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
