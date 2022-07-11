import React, { useState } from "react";

import "./AddTask.css";
import TaskModel from "../../../model/Task";
import { useDispatch } from "react-redux";
import { createTaskThunk } from "../../../redux/thunk/task.thunk";
import InputForm from "../../../shared-components/input-form/InputForm";

interface AddTaskComponentProps {
    cardId: string;
}

export default function AddTaskComponent(props: AddTaskComponentProps) {

    const dispatch = useDispatch();

    const [newTaskTitle, setNEwTaskTitle] = useState<string>("");


    function handleNewTaskValueChange(event: any) {
        setNEwTaskTitle(event.target.value);
    }


    function handleAddNewTask() {
        const newTask = TaskModel.newInstance(newTaskTitle, props.cardId)
        setNEwTaskTitle("");

        dispatch(createTaskThunk(newTask));
    }

    function handleTaskCreate(e: any) {
        handleAddNewTask();
        e.preventDefault();
    }

    return (
        <div className="add-task-container">
            <InputForm
                className="add-task-input"
                placeholder="Add Task..."
                value={newTaskTitle}
                onSubmit={handleTaskCreate}
                onChange={handleNewTaskValueChange}
            />
            <button
                onClick={handleAddNewTask}
                className="add-task-button"
                disabled={!newTaskTitle}
            >+
            </button>
        </div>
    )
}