import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function Tasks ({ taskList }) {    
    if (!taskList) {
        return <p>No Tasks</p>
    }

    return (
        <span id="list">
            Your tasks are {taskList.map((task) => (
                <Task title={task.title} />
            ))}
            <TaskForm taskList={taskList} />
        </span>
    );
}
