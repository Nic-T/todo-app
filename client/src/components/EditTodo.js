import React, {Fragment,useState} from 'react';

import './css/EditTodo.css';

function EditTodo({todo}){
    
    const [modalState, setModalState]= useState(false);
    const [description, setDescription] = useState(todo.description);
    const [title, setTitle] = useState(todo.title);

    const updateTodo = async(e) => {
        e.preventDefault();
        try {
            const body = {description, title};
            const respone = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location= "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    const toggleModalState =() => {
        setModalState(!modalState)
    }
    if(modalState === true){
        return(
            <Fragment>
            <button onClick={()=> toggleModalState()} className="edit1" >Edit</button>
            <div className="modalWrapper" id={`id${todo.todo_id}`}>
                <div className="modalBackdrop" />
                <div className="modalBox">
                    
                    <form className="editForm">
                        <label className="textInput">Title</label>
                        <input className="titleInput" type="text" value={title} onChange={e=> setTitle(e.target.value)}/>
                        <label className="textInput">Description</label>
                        <textarea className="descriptionInput" type="text" style={{height: 150+'px'}} value={description} onChange={e=> setDescription(e.target.value)}/>
                        <div className="buttons">
                        <button className="edit" onClick={e => updateTodo(e)}>
                            Edit
                        </button>

                        <button className="close" onClick={() => toggleModalState()}>
                            Exit
                        </button>
                        </div>
                        
                    </form>

                    
                </div>
            </div>
            </Fragment>
        );

    }
    
    else{
        return(

            <Fragment>
                <button className="edit1" onClick={()=> toggleModalState()}>Edit</button>
            </Fragment>
        );
    } 
    

}


export default EditTodo;