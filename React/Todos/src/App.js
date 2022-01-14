import './App.css';
import Input from "./componets/Input";
import TaksList from "./componets/TaksList";
import {useEffect, useState} from "react";
import TaskCounter from "./componets/TaskCounter";
import axios from "axios";
import {getAllTasks} from "./helpers/helpers";

// TODO add beautiful styling for this app and add to portfolio
function App() {

    const [todo, setTodo] = useState('');
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState('all');

    useEffect(() => {
        getAllTasks(setItems).catch(() => {
        });
    }, [])


    const handleInput = (e) => {
        setTodo(e.target.value);
    }

    const setInput = (e) => {

        if (e.key === 'Enter') {
            const newTodo = {
                name: todo,
                status: false
            }

            // TODO move to helpers and switch to axios
            fetch('http://localhost:3001/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            }).then(e => e.json()).then(e => {
                setItems([...items, e]);
                setTodo('')
            })


        }

    }

    const handleStatus = (id) => {

        const newItem = items.filter((item) => item.id === parseInt(id))[0];
        newItem.status = !newItem.status;

        axios({
            method: "PATCH",
            url: `http://localhost:3001/todos/${id}`,
            data: {status: newItem.status}
        }).then(e => {
            setItems([...items]);
        }).catch(e => {
            console.log('spróbuj później')
        })
    };

    const clearCompleted = () => setItems(items.filter((item) => !item.status));

    return (
        <div className="App">
            <h1>ToDos</h1>
            <Input setInput={setInput} handleInput={handleInput} value={todo}/>
            <TaksList status={status} items={items} handleStatus={handleStatus} setItems={setItems}/>
            <TaskCounter items={items}/>
            <div className="">
                <button onClick={() => setStatus('all')}>All</button>
                <button onClick={() => setStatus(false)}>Active</button>
                <button onClick={() => setStatus(true)}>Completed</button>
                {items.filter((item) => item.status).length > 0 &&
                // TODO add server functionality for this button
                <button onClick={clearCompleted}>Clear completed</button>}
            </div>
        </div>
    );
}

export default App;
