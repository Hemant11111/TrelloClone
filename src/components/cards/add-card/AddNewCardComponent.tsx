import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./AddNewCard.css";
import { StringUtil } from "../../../util/StringUtil";
import { createCardThunk } from "../../../redux/thunk/card.thunk";
import InputForm from "../../../shared-components/input-form/InputForm";

interface AddNewCardComponentProps {
}


export default function AddNewCardComponent(props: AddNewCardComponentProps) {

    const dispatch = useDispatch();

    const [isAddingNewCard, setIsAddingNewCard] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState("");


    function handleAddCardClick() {
        setIsAddingNewCard(v => !v);
    }

    function handleNewCardValueChange(e: any) {
        setNewCardTitle(e.target.value)
    }


    function handleCreateCard(e: any) {
        if (!newCardTitle) {
            return;
        }
        const newCard = {
            title: newCardTitle,
            id: StringUtil.generateRandomString(6)
        }

        setNewCardTitle("");
        setIsAddingNewCard(false);

        e.preventDefault();
        dispatch(createCardThunk(newCard));
    }


    return (
        <div className="add-new-card-container">
            {
                isAddingNewCard && (
                    <div className="add-new-card-input">
                        <InputForm
                            onSubmit={handleCreateCard}
                            value={newCardTitle}
                            placeholder="Create new card..."
                            onChange={handleNewCardValueChange}
                        />
                    </div>
                )
            }

            <button className="add-new-card-btn" onClick={handleAddCardClick}>
                <i className="fa fa-plus"/>
            </button>
        </div>
    )
}