import React, { useState } from "react";

import "./Task.css";
import TaskModel from "../../model/Task";
import InputForm from "../../shared-components/input-form/InputForm";


interface TaskComponentProps {
    task: TaskModel;
    onDelete: (taskId: string) => void;
    onUpdate: (task: TaskModel) => void;
}

export default function TaskComponent(props: TaskComponentProps) {

    const {task, task: {id, title, updating}, onDelete, onUpdate} = props;

    const [_taskTitle, setTaskTitle] = useState(title);


    function handleDelete() {
        onDelete(id);
    }

    function handleEdit() {
        onUpdate({...task, updating: true});
    }

    function handleUpdate() {
        onUpdate({...task, title: _taskTitle, updating: false});
    }


    function handleTaskChange(e: any) {
        setTaskTitle(e.target.value);
    }

    function handleDragStart(event: any) {
        event.dataTransfer.setData("taskId", id);
    }

    return (
        <div className="card task-container" draggable={true} onDragStart={handleDragStart}>
            {
                updating ? (
                    <InputForm
                        onChange={handleTaskChange}
                        onSubmit={handleUpdate}
                        value={_taskTitle}
                        className=""
                        placeholder="Add Task..."
                    />
                ) : _taskTitle
            }

            <div className="task-action-container">
                {updating ? (
                    <button
                        className="trello-icon-button task-save"
                        onClick={handleUpdate}
                        disabled={!_taskTitle}
                    >
                        Save
                    </button>
                ) : (
                    <button className="trello-icon-button task-edit" onClick={handleEdit}>E</button>
                )}

                <button className="trello-icon-button task-delete" onClick={handleDelete}>X</button>
            </div>
        </div>
    )
}