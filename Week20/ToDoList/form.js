function TodoForm({addTodo}){
    // define variable and state to use for adding todos
    const [value, setValue] = React.useState('');
    // function to handle the input on an event
    const handleSubmit = e => {
        // prevents the autoreloud of page
        e.preventDefault();
        console.log(value);
        if (!value) return;
        addTodo(value);
        //resets it to empty after we're done with our shiz 
        setValue('');
        }
    return(
    <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} placeholder="Add ToDo .." onChange={e => setValue(e.target.value)}/>
      </form>
    )
}