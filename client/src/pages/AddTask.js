import React, {Fragment,useState} from 'react';

import "./css/AddTask.css";

function AddTask(){

    const [title,setTitle]=useState("");
    const [description, setDescription] = useState("");

    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try {
            const body = {title,description};
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.error(err.message)
        }


    }

    return(

        <Fragment>
            
            <form className="formInput" onSubmit={onSubmitForm}>

                <input name="title" type="text" className="inputTitle" placeholder="Title" value={title} onChange={e=> setTitle(e.target.value)}/>

                <textarea name="description"  className="inputDescription" placeholder="Description" value={description} style={{height: 200+'px'}} onChange={e=> setDescription(e.target.value)}/>

                <button className="submitButton">Submit</button>

            </form>


        </Fragment>

    )


}

export default AddTask;