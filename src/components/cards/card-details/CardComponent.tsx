import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import "./CardComponent.scss";
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

    const handleCardDelete = useCallback(() => {
        if (window.confirm("Are you sure, you wants to delete this Card?")) {
            dispatch(deleteCardThunk(id));
        }
    }, []);

    function _udpateCard(card: CardModel) {
        dispatch(editCardThunk(card));
    }

    const handleDoubleClick = useCallback(() => {
        _udpateCard({...card, updating: true});
    }, []);


    const handleTitleChange = useCallback((e: any) => {
        setNewCardTitle(e.target.value)
    }, [setNewCardTitle]);

    const handleTitleUpdate = useCallback((e: any) => {
        _udpateCard({...card, title: _newCardTitle, updating: false});
        e.preventDefault();
    }, [_newCardTitle]);


    const handleDrop = useCallback((event: any) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData("taskId");
        dispatch(taskMovedToAnotherCardThunk(taskId, id));
    }, []);

    const handleDragOver = useCallback((event: any) => {
        event.preventDefault();
    }, []);


    return (
        <div className="card card-container" onDrop={handleDrop} onDragOver={handleDragOver}>
            {updating ?
                (
                    <InputForm
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

            <button data-testid="btn-card-delete" className="card-dlt-button" onClick={handleCardDelete}>
                <i className="fa fa-remove"/> Delete
            </button>
        </div>
    )
}