import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskListByCardId } from "../../../redux/selectors/task.selector";

import "./ListTask.css";
import TaskModel from "../../../model/Task";
import TaskComponent from "../Task";
import AddTaskComponent from "../add-task/AddTaskComponent";
import { deleteTaskThunk, editTaskThunk } from "../../../redux/thunk/task.thunk";

interface ListCardComponentProps {
    cardId: string
}

export default function ListTaskComponent(props: ListCardComponentProps) {

    const tasks = useSelector(getTaskListByCardId(props.cardId));
    const dispatch = useDispatch();

    function handleTaskUpdate(task: TaskModel) {
        dispatch(editTaskThunk(task));
    }


    function handleTaskDelete(taskId: string) {
        dispatch(deleteTaskThunk(taskId));
    }

    return (
        <>
            {
                tasks.map((task: TaskModel) => {
                    return (
                        <TaskComponent
                            key={`task-${task.id}`}
                            onDelete={handleTaskDelete}
                            task={task}
                            onUpdate={handleTaskUpdate}
                        />
                    )
                })
            }

            <AddTaskComponent cardId={props.cardId}/>
        </>
    )
}