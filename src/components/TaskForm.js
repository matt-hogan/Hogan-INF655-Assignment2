import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tasks from "./Tasks";

export default function TaskForm ({ taskList }) {
    const [input, setInput] = useState("");

    const handleInput = event => {
        setInput(event.target.value);
    };

    const addTask = () => taskList.push({id: (taskList[taskList.length-1].id+1), title: input, description: ""});

    const handleSubmit = () => {
        addTask();
        ReactDOM.render(<Tasks taskList={taskList} />, document.getElementById("list"));
    };

    return (
        <div>
            <input type="text" onChange={handleInput} placeholder="New Task" ></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}