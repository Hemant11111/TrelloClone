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
        if (window.confirm("Are you sure, you wants to delete this task?")) {
            onDelete(id);
        }
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
                        className="trello-icon-button"
                        onClick={handleUpdate}
                        disabled={!_taskTitle}
                    >
                        <i className="fa fa-save"/>
                    </button>
                ) : (
                    <button className="trello-icon-button" onClick={handleEdit}>
                        <i className="fa fa-edit"/>
                    </button>
                )}

                <button className="trello-icon-button task-delete" onClick={handleDelete}>
                    <i className="fa fa-remove"/>
                </button>
            </div>
        </div>
    )
}