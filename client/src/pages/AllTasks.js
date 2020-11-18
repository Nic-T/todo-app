import React,{Fragment, useEffect, useState} from 'react';
import EditTodo from '../components/EditTodo'

import "./css/AllTasks.css"


function AllTasks() {
    const [todos, setTodos] = useState([]);


    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.log(err.message)
        }
    }


    const getTodos = async() => {

        try {
            
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
            getTodos();
    },[]);

    return(

        <Fragment>
           
           <table className="taskTable">
                <tbody>
                    {todos.map(todo => (
                        <div className="todo">
                            <tr key={todo.todo_id} >
                                <div className="innerContainer">
                                    <td>
                                        <article className="todoBody">
                                            <h3>
                                                {todo.title}
                                            </h3>

                                            <p> 
                                                {todo.description}
                                            </p>

                                        </article>
                                    </td>

                                    <div className="buttons1">
                                        <td>
                                            <button className="delete" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                                        </td>

                                        <td>
                                            <EditTodo todo={todo}/>
                                        </td>
                                    </div>
                                </div>
                                

                            </tr>   
                        </div>

                    ))}
                   
                </tbody>
           </table>

        </Fragment>

    );


}


export default AllTasks;