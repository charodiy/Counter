import React from 'react';
import {UserList} from "../user-list/UserList";
import {UserForm} from "../user-form/UserForm";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className="d-flex">
            <UserList/>
        </div>
    );
}

export default App;
