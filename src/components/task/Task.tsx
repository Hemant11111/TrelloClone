import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Task.css";
import TaskModel from "../../model/Task";
import InputForm from "../../shared-components/input-form/InputForm";
import { deleteTaskThunk, editTaskThunk } from "../../redux/thunk/task.thunk";


interface TaskComponentProps {
    task: TaskModel;
}

export default function TaskComponent(props: TaskComponentProps) {

    const {task, task: {id, title, updating}} = props;

    const [_taskTitle, setTaskTitle] = useState(title);

    const dispatch = useDispatch();

    function _updateTask(task: TaskModel) {
        dispatch(editTaskThunk(task));
    }


    function handleDelete() {
        if (window.confirm("Are you sure, you wants to delete this task?")) {
            dispatch(deleteTaskThunk(id));
        }
    }

    function handleEdit() {
        _updateTask({...task, updating: true});
    }

    function handleUpdate() {
        _updateTask({...task, title: _taskTitle, updating: false});
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