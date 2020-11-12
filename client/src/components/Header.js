import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import './css/Header.css'
function Header(){


    return(

        <Fragment>

        <h1 className="title">Todo App</h1>

        <div className="menu">

            
            <Link to="/" className="menuLink">
                <button className="menuButton">
                    All Tasks
                </button>
            </Link>

            <Link to="/addtask" className="menuLink">
                <button className="menuButton">
                    Add Task
                </button>
            </Link>
            
            
            
        </div>

        </Fragment>


    );

}

export default Header;