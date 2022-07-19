import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import "./AddNewCard.scss";
import { createDummyNewCardThunk } from "../../../redux/thunk/card.thunk";

interface AddNewCardComponentProps {
}


export default function AddNewCardComponent(props: AddNewCardComponentProps) {

    const dispatch = useDispatch();

    const handleAddCardClick = useCallback(() => {
        dispatch(createDummyNewCardThunk());
    }, []);

    return (
        <div className="add-new-card-container">
            <button data-testid="add-new-card-button" className="add-new-card-btn" onClick={handleAddCardClick}>
                <i className="fa fa-plus"/>
            </button>
        </div>
    )
}