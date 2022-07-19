import React from "react";
import { useSelector } from "react-redux";

import "./ListTask.scss";
import TaskModel from "../../../model/Task";
import TaskComponent from "../task-details/TaskComponent";
import AddTaskComponent from "../add-task/AddTaskComponent";
import { getTaskListByCardId } from "../../../redux/selectors/task.selector";

interface ListCardComponentProps {
    cardId: string
}

function ListTaskComponent(props: ListCardComponentProps) {

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

export default React.memo(ListTaskComponent);