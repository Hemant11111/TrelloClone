import "./Card.css";
import CardModel from "../../../model/Card";
import ListTaskComponent from "../../task/list-task/ListTaskComponent";
import { useState } from "react";
import InputForm from "../../../shared-components/input-form/InputForm";

interface CardComponentProps {
    card: CardModel;
    onCardDelete: (cardId: string) => void;
    onCardUpdate: (card: CardModel) => void;
}

export default function CardComponent(
    {
        card: {id, title, updating},
        card,
        onCardDelete,
        onCardUpdate
    }: CardComponentProps) {

    const [_newCardTitle, setNewCardTitle] = useState(title);

    function handleCardDelete() {
        onCardDelete(id);
    }

    function handleDoubleClick() {
        onCardUpdate({...card, updating: true});
    }

    function handleTitleChange(e: any) {
        setNewCardTitle(e.target.value)
    }

    function handleTitleUpdate(e: any) {
        onCardUpdate({...card, title: _newCardTitle, updating: false});
        e.preventDefault();
    }

    return (
        <div className="card card-container">
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

            <button className="card-dlt-button" onClick={handleCardDelete}>Delete</button>
        </div>
    )
}