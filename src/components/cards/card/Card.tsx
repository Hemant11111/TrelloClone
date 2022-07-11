import { useState } from "react";
import { useDispatch } from "react-redux";

import "./Card.css";
import CardModel from "../../../model/Card";
import ListTaskComponent from "../../task/list-task/ListTaskComponent";
import InputForm from "../../../shared-components/input-form/InputForm";
import { taskMovedToAnotherCardThunk } from "../../../redux/thunk/task.thunk";
import { deleteCardThunk, editCardThunk } from "../../../redux/thunk/card.thunk";

interface CardComponentProps {
    card: CardModel;
}

export default function CardComponent(
    {
        card: {id, title, updating},
        card
    }: CardComponentProps) {

    const dispatch = useDispatch();

    const [_newCardTitle, setNewCardTitle] = useState(title);

    function handleCardDelete() {
        if (window.confirm("Are you sure, you wants to delete this Card?")) {
            dispatch(deleteCardThunk(id));
        }
    }

    function _udpateCard(card: CardModel){
        dispatch(editCardThunk(card));
    }

    function handleDoubleClick() {
        _udpateCard({...card, updating: true});
    }

    function handleTitleChange(e: any) {
        setNewCardTitle(e.target.value)
    }

    function handleTitleUpdate(e: any) {
        _udpateCard({...card, title: _newCardTitle, updating: false});
        e.preventDefault();
    }


    function handleDrop(event: any) {
        event.preventDefault();
        const taskId = event.dataTransfer.getData("taskId");
        dispatch(taskMovedToAnotherCardThunk(taskId, id));
    }

    function handleDragOver(event: any) {
        event.preventDefault();
    }


    return (
        <div className="card card-container" onDrop={handleDrop} onDragOver={handleDragOver}>
            {updating ?
                (
                    <InputForm
                        className=""
                        placeholder="Add card title..."
                        onChange={handleTitleChange}
                        onSubmit={handleTitleUpdate}
                        value={_newCardTitle}
                    />
                ) : (
                    <span className="card-title" onDoubleClick={handleDoubleClick}>{title}</span>
                )
            }

            <div className="card-tasks-container">
                <ListTaskComponent cardId={id}/>
            </div>

            <button className="card-dlt-button" onClick={handleCardDelete}>
                <i className="fa fa-remove"/> Delete
            </button>
        </div>
    )
}