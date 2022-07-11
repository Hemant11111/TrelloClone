import React from "react";
import { useDispatch } from "react-redux";

import "./AddNewCard.css";
import { createDummyNewCardThunk } from "../../../redux/thunk/card.thunk";

interface AddNewCardComponentProps {
}


export default function AddNewCardComponent(props: AddNewCardComponentProps) {

    const dispatch = useDispatch();


    function handleAddCardClick() {
        dispatch(createDummyNewCardThunk());
    }


    return (
        <div className="add-new-card-container">
            <button className="add-new-card-btn" onClick={handleAddCardClick}>
                <i className="fa fa-plus"/>
            </button>
        </div>
    )
}