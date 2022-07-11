import React from "react";
import { useSelector } from "react-redux";

import "./ListTask.css";
import TaskModel from "../../../model/Task";
import TaskComponent from "../Task";
import AddTaskComponent from "../add-task/AddTaskComponent";
import { getTaskListByCardId } from "../../../redux/selectors/task.selector";

interface ListCardComponentProps {
    cardId: string
}

export default function ListTaskComponent(props: ListCardComponentProps) {

    const tasks = useSelector(getTaskListByCardId(props.cardId));

    return (
        <div className="task-list-container">
            {
                tasks.map((task: TaskModel) => {
                    return (
                        <TaskComponent
                            key={`task-${task.id}`}
                            task={task}
                        />
                    )
                })
            }

            <AddTaskComponent cardId={props.cardId}/>
        </div>
    )
}