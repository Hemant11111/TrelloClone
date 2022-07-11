import React, { useCallback, useState } from "react";

import "./AddTask.scss";
import TaskModel from "../../../model/Task";
import { useDispatch } from "react-redux";
import { createTaskThunk } from "../../../redux/thunk/task.thunk";
import InputForm from "../../../shared-components/input-form/InputForm";

interface AddTaskComponentProps {
    cardId: string;
}

export default function AddTaskComponent(props: AddTaskComponentProps) {

    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>("");

    const handleNewTaskValueChange = useCallback((event: any) => {
        setTitle(event.target.value);
    }, [setTitle]);

    const handleAddNewTask = useCallback(() => {
        const newTask = TaskModel.newInstance(title, props.cardId)
        setTitle("");

        dispatch(createTaskThunk(newTask));
    }, [title])


    const handleTaskCreate = useCallback((e: any) => {
        handleAddNewTask();
        e.preventDefault();
    }, [title]);

    return (
        <div className="add-task-container">
            <InputForm
                placeholder="Add Task..."
                value={title}
                onSubmit={handleTaskCreate}
                onChange={handleNewTaskValueChange}
            />
            <button
                onClick={handleAddNewTask}
                className="add-task-button trello-icon-button"
                disabled={!title}
            ><i className="fa fa-plus"/>
            </button>
        </div>
    )
}